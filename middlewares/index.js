const validationPost = require("./validationPost");
const validationUpdate = require("./validationUpdate");
const validateId = require("./validateId");
const validationBody = require("./validationBody");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validationPost,
  validateId,
  validationUpdate,
  validationBody,
  authenticate,
  upload,
};
