const multer = require("multer");
const path = require("path");


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/images/upload')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null,  uniqueSuffix + path.extname(file.originalname));
//     }
//   })

//   const upload = multer({ storage: storage });

function fileFilter(req, file, cb) {
  const extensions = [".jpg", ".png", ".webp", ".jpeg"];
  let ext = path.extname(file.originalname);

  let result = extensions.includes(ext);
  if (result) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed."), false);
  }
}

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});
module.exports = upload;
