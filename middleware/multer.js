const mimeTypes = require("mime-types");
const multer = require("multer");

// Multer Storage
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(err, des-colder)
    cb(null, "./uploads/organizers");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${Date.now()}.${ext}`);
  },
});

// Multer Filter
const multerFilter = (req, file, cb) => {
  const ext = mimeTypes.extension(file.mimetype);
  if (ext !== "png" && ext !== "jpg" && ext !== "jpeg") {
    cb(new Error("File must be: png, jpg, jepg"), false);
  }
  cb(null, true);
};

// Multer
exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
}).single('image')
