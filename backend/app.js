const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "iddeasite@gmail.com",
      pass: "261243angel",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "iddeasite@gmail.com",
    subject: `Mensaje de ${req.body.email}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else {
      console.log("Email Enviado: " + info.response);
      res.status(200).json({
        status: 200,
        info: info.response,
        message: "Email Enviado",
      });
    }
  });
});

app.set("puerto", process.env.PORT || 4200);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port " + app.get("puerto"));
});
