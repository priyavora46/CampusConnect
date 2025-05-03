const express = require('express');
const multer = require('multer');
const path = require('path');
const Admission = require('../models/admission');
const fs = require("fs");

const router = express.Router();

// Multer file upload configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadsPath = path.join(__dirname, '../uploads'); // Correct path!
        if (!fs.existsSync(uploadsPath)) {
            fs.mkdirSync(uploadsPath);
        }
        cb(null, uploadsPath);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname).toLowerCase();
        cb(null, Date.now() + '-' + Math.random().toString(36).substring(2, 15) + fileExt);
    },
});

// File type filter and size limit
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type. Only JPG, PNG, and PDF allowed."), false);
        }
    }
}).fields([
    { name: 'document_0_file', maxCount: 1 },
    { name: 'document_1_file', maxCount: 1 },
    { name: 'document_2_file', maxCount: 1 },
    { name: 'document_3_file', maxCount: 1 },
]);

// POST route to handle form submission with document upload (CREATE)
router.post('/admissions', upload, async (req, res) => {
    try {
        console.log('Form data:', req.body);
        console.log('Uploaded files:', req.files);

        const { fullName, email, phone, dob, city, course, paymentMode } = req.body;
        const documentsTypes = JSON.parse(req.body.documents);

        // Basic field validation
        if (!fullName || !email || !phone || !dob || !city || !course || !paymentMode || !documentsTypes) {
            return res.status(400).json({ message: 'All basic fields are required.' });
        }

        // Check for correct number of files.
        if (!req.files || Object.keys(req.files).length !== documentsTypes.length) {
            return res.status(400).json({ message: `Incorrect number of files. Expected ${documentsTypes.length}, got ${req.files ? Object.keys(req.files).length : 0}.` });
        }

        // Prepare document data, handling potential missing files
        const uploadedDocuments = [];
        for (let i = 0; i < documentsTypes.length; i++) {
            const fileKey = `document_${i}_file`;
            if (req.files && req.files[fileKey] && req.files[fileKey][0] && req.files[fileKey][0].path) {
                uploadedDocuments.push({
                    type: documentsTypes[i].type,
                    file: req.files[fileKey][0].path,
                });
            } else {
                return res.status(400).json({ message: `Missing file for ${documentsTypes[i].type}` });
            }
        }

        // Create a new Admission document in the database
        const newAdmission = new Admission({
            fullName,
            email,
            phone,
            dob,
            city,
            course,
            address: city, // Use city for address for now
            paymentMode,
            documents: uploadedDocuments,
        });

        // Save to the database
        await newAdmission.save();

        res.status(200).json({ message: 'Admission form submitted successfully!', data: newAdmission });
    } catch (error) {
        console.error('Error submitting admission form:', error);
        if (error instanceof multer.MulterError) {
            return res.status(400).json({ message: `File upload error: ${error.message}` });
        } else if (error instanceof Error && error.message.startsWith('Invalid file type')) {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Submission failed. Please try again later.', error: error });
    }
});

// GET route to retrieve all admissions (READ)
router.get('/admissions', async (req, res) => {
    try {
        const admissions = await Admission.find();
        res.status(200).json(admissions);
    } catch (error) {
        console.error('Error fetching admissions:', error);
        res.status(500).json({ message: 'Failed to retrieve admissions.', error: error });
    }
});

// GET route to retrieve a single admission by ID (READ)
router.get('/admissions/:id', async (req, res) => {
    try {
        const admission = await Admission.findById(req.params.id);
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found.' });
        }
        res.status(200).json(admission);
    } catch (error) {
        console.error('Error fetching admission:', error);
        res.status(500).json({ message: 'Failed to retrieve admission.', error: error });
    }
});



// PUT route to update an existing admission (UPDATE)
router.put('/admissions/:id', upload, async (req, res) => {
    try {
        console.log('Update form data:', req.body);
        console.log('Updated files:', req.files);

        const { fullName, email, phone, dob, city, course, paymentMode } = req.body;
        const documentsTypes = req.body.documents ? JSON.parse(req.body.documents) : []; //handle if no documents

        const existingAdmission = await Admission.findById(req.params.id);
        if (!existingAdmission) {
            return res.status(404).json({ message: 'Admission not found.' });
        }

        // Basic field validation
        if (!fullName || !email || !phone || !dob || !city || !course || !paymentMode || !documentsTypes) {
            return res.status(400).json({ message: 'All basic fields are required.' });
        }

        const uploadedDocuments = [];
        if (req.files) { // check if new files are uploaded
             for (let i = 0; i < documentsTypes.length; i++) {
                const fileKey = `document_${i}_file`;
                if (req.files && req.files[fileKey] && req.files[fileKey][0] && req.files[fileKey][0].path) {
                    uploadedDocuments.push({
                        type: documentsTypes[i].type,
                        file: req.files[fileKey][0].path,
                    });
                } else {
                    uploadedDocuments.push(existingAdmission.documents[i]); //keep the old file
                }
            }
        }
        else{
            uploadedDocuments = existingAdmission.documents;
        }
       // Check for correct number of files.
        if (uploadedDocuments.length !== documentsTypes.length) {
            return res.status(400).json({ message: `Incorrect number of files. Expected ${documentsTypes.length}, got ${uploadedDocuments.length}.` });
        }
      

        // Update the admission data
        existingAdmission.fullName = fullName;
        existingAdmission.email = email;
        existingAdmission.phone = phone;
        existingAdmission.dob = dob;
        existingAdmission.city = city;
        existingAdmission.course = course;
        existingAdmission.address = city;
        existingAdmission.paymentMode = paymentMode;
        existingAdmission.documents = uploadedDocuments; // Assign the updated documents

        await existingAdmission.save();
        res.status(200).json({ message: 'Admission updated successfully!', data: existingAdmission });
    } catch (error) {
        console.error('Error updating admission:', error);
        if (error instanceof multer.MulterError) {
            return res.status(400).json({ message: `File upload error: ${error.message}` });
        } else if (error instanceof Error && error.message.startsWith('Invalid file type')) {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Failed to update admission.', error: error });
    }
});

// DELETE route to delete an admission (DELETE)
router.delete('/admissions/:id', async (req, res) => {
    try {
        const admission = await Admission.findByIdAndDelete(req.params.id);
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found.' });
        }
         // Delete associated files from the uploads folder
        if (admission.documents && admission.documents.length > 0) {
            admission.documents.forEach(doc => {
                const filePath = doc.file;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    console.log(`Deleted file: ${filePath}`);
                }
            });
        }
        res.status(200).json({ message: 'Admission deleted successfully!' });
    } catch (error) {
        console.error('Error deleting admission:', error);
        res.status(500).json({ message: 'Failed to delete admission.', error: error });
    }
});

module.exports = router;
