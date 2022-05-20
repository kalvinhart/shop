const aws = require("aws-sdk");

const region = "eu-west-2";
const bucketName = "mernestore";
const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_SECRET_KEY;

const s3 = new aws.S3({
  region,
  bucketName,
  accessKeyId,
  secretAccessKey,
});

const generateUploadUrl = async (req, res, next) => {
  const { id, name } = req.body;

  const imageName = `${id}-${name}`;

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 90,
  };

  try {
    const uploadURL = await s3.getSignedUrlPromise("putObject", params);
    res.status(200).json({ url: uploadURL });
  } catch (err) {
    next(new Error("An unexpected error has occurred."));
    res.end();
  }
};

module.exports = {
  generateUploadUrl,
};
