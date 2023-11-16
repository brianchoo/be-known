import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.USER,
      to: process.env.USER,
      subject: `Contact from ${name} - ${email}`,
      html: `<h1>${message} - ${phone}</h1>`,
    });
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json(req.body);
};
