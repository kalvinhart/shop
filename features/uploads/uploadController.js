const uploadService = require("../../services/uploadService");

const getUrl = async (id, name) => {
  return await uploadService.generateUploadUrl(id, name);
};

module.exports = {
  getUrl,
};
