const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validationPost, validationPut } = require("../../middlewares");

const schemas = require("../../schemas/contact");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validationPost(schemas.add), ctrlWrapper(ctrl.add));

router.put("/:id", validationPut(schemas.add), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
