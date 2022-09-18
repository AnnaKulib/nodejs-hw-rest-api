const { User } = require("../../models/user");
const { RequestError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404, "Not Found");
  }
  if (user.verify) {
    throw RequestError(400, "User already verify");
  }
  const mail = {
    to: email,
    subject: "Сonfirmation of registration",
    html: `<a href="https://localhost:3000/api/auth/verify/${user.verificationToken}" target="_blank">Press to confirm email</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
