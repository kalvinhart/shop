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

const uploadService = {
  async generateUploadUrl(id, name) {
    const imageName = `${id}-${name}`;

    const params = {
      Bucket: bucketName,
      Key: imageName,
      Expires: 90,
    };

    return await s3.getSignedUrlPromise("putObject", params);
  },
};

module.exports = uploadService;
