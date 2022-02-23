const errorHandler = (err, req, res, next) => {
  console.log("Reached errorHandler");
  const { status = 500, message = "An unknown error has occurred." } = err;
  res.status(status).json(message);
};

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

module.exports = { errorHandler, catchAsync };
