const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();

// 🔗 MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/collegeconnect", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 📦 Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 📁 Set up multer storage for file uploads
const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsPath = path.join(__dirname, "uploads");
    // Check if the 'uploads' directory exists, if not, create it
    if (!fs.existsSync(uploadsPath)) {
      fs.mkdirSync(uploadsPath);
    }
    cb(null, uploadsPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Validate file types (optional)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]; // Add more if necessary
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG, PNG, and PDF allowed."), false);
  }
};

const uploads = multer({ storage: uploadStorage, fileFilter });

// 📁 Serve static files for uploaded documents
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 🌐 Route imports
const authRoutes = require("./routes/auth");
const admissionRoutes = require("./routes/admissionRoutes");
const contactRoutes = require('./routes/contactRoutes');
const eventRegisterRoute = require('./routes/eventRegister');


// 🌍 Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/admission", admissionRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', eventRegisterRoute);

// 🔘 Default route
app.get("/", (req, res) => {
  res.send("🎓 College Connect Backend Running...");
});

// 🟢 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});