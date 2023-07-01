import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

export default upload;
