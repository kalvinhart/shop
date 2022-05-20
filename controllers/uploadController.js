const uploadFile = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: "No file was uploaded." });
  }
};

module.exports = {
  uploadFile,
};
