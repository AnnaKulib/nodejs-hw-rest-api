const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { Conflict } = require("http-errors");
const { User } = require("../../models/user");
const { sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email ${email} already exist`);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });
  const mail = {
    to: email,
    subject: "Сonfirmation of registration",
    html: `<a href="https://localhost:3000/api/auth/verify/${verificationToken}" target="_blank">Press to confirm email</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      email: newUser.email,
    },
  });
};

module.exports = register;
