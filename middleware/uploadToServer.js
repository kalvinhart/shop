export const uploadToServer = (req, res, next) => {
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
    return next(err.message);
  }

  image.mv(combinedPath, (err) => {
    if (err) {
      return next(500, err.message);
    } else {
      return res.status(200).json({ imageUrl: imagePath });
    }
  });
};
