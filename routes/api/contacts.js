const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");
const { joiSchema, favoriteJoiSchema } = require("../../models");
const {
  validationPost,
  validationUpdate,
  validateId,
} = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:id", validateId, ctrlWrapper(ctrl.getById));
router.post("/", validationPost(joiSchema), ctrlWrapper(ctrl.add));
router.delete("/:id", validateId, ctrlWrapper(ctrl.removeById));
router.put(
  "/:id",
  validateId,
  validationUpdate(joiSchema),
  ctrlWrapper(ctrl.putById)
);
router.patch(
  "/:id/favorite",
  validateId,
  validationUpdate(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
