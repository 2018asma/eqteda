const res = require("express/lib/response");
const mimeTypes = require("mime-types");
const multer = require("multer");

// Organizer Multer Storage
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/organizers");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${Date.now()}.${ext}`);
  },
});

// Program Multer Storage
const programStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/programs");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${Date.now()}.${ext}`);
  },
});

// Check File Type
exports.fileType = (file) => {
  const ext = mimeTypes.extension(file.mimetype);
  if (ext !== "png" && ext !== "jpg" && ext !== "jpeg") {
    return false;
  } else {
    return true;
  }
};

// Check File Exist
exports.isFileNotExist = (req, file) => {
  if (!file) {
    return "File not Exit";
  } else if (!this.fileType(file)) {
    return "file not Allowed";
  } else {
    return false;
  }
};



// Uploads
exports.uploads = multer({
  storage: programStorage,
  fileFilter: function (req, file, cb) {
    const ext = mimeTypes.extension(file.mimetype);
    if (ext !== "png" && ext !== "jpg" && ext !== "jpeg") {
      return cb(null, false);
    }
    cb(null, true);
  },
}).single("image")