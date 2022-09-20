const { Contact } = require("../../models");

const add = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });

  if (result) {
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  }
};

module.exports = add;
