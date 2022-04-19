const path = require("path");
const fs = require("fs");

const uploadFile = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json({ error: "No file was uploaded." });
  }

  const { id } = req.body;
  const { image } = req.files;
  const { appRoot } = req;
  const uploadPathRoot = path.join(appRoot, `/client/build/uploads/${id}`);
  const imagePath = `/uploads/${id}/${image.name}`;
  const combinedPath = path.join(uploadPathRoot, `/${image.name}`);

  try {
    if (!fs.existsSync(uploadPathRoot)) {
      fs.mkdirSync(uploadPathRoot);
    }
  } catch (err) {
    next(err.message);
  }

  image.mv(combinedPath, (err) => {
    if (err) {
      return res.status(500).json({
        error: "An error occurred while uploading your file.",
        message: err.message,
      });
    }

    res.status(200).json({ imageUrl: imagePath });
  });
};

module.exports = {
  uploadFile,
};
