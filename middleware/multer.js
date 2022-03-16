const Oragizer = require("../models/Organizer");
const mimeTypes = require("mime-types");
const multer = require("multer");
const res = require("express/lib/response");

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
    cb(null, false);
  }
  cb(null, true);
};

// Multer
exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
}).single("image");


exports.fileType =  (file, ) => {
  const ext = mimeTypes.extension(file.mimetype);
  if (ext !== "png" && ext !== "jpg" && ext !== "jpeg") {
   return false;
  } else {
   return true;
  }
};

exports.isFileNotExist = (file) => {
  if (!file) {
    return 'File not Exit';
  } else if(!this.fileType(file)){
    return 'file not Allowed'
  }else{
    return false;
  }
};
