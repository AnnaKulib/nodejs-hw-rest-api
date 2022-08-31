const { User } = require("../../models/user");

const currentUser = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });
  const { subscription } = user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = currentUser;
