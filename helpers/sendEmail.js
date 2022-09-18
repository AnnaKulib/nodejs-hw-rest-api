const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "anna.kulibabina@gmail.com" };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};
// const msg = {
//   to: "ruslan.kulibabin@gmail.com",
//   from: "anna.kulibabina@gmail.com",
//   subject: "Sending with SendGrid",
//   html: "<strong>Tyt kakou-to tekst</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
module.exports = sendEmail;
