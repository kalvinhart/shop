const errorHandler = (err, req, res, next) => {
  const { status = 500, message = "An unknown error has occurred." } = err;
  console.log("Reached errorHandler: ", message);
  res.status(status).json({ message });
};

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

module.exports = { errorHandler, catchAsync };
