const express = require("express");
const nodemailer = require("nodemailer");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    // BODY PARSER MIDDLEWARE
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.post("/sendMessage", (req, res) => {
      if (req.body && Object.keys(req.body).length) {
        console.log("trying to send message");
        const data = req.body;
        const message = `New message from\nname: ${data.name}\ncompany: ${data.company}\nemail: ${data.email}\n\n${data.message}`;
        var transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          auth: {
            user: "000000000000000000000000000000000000000000000",
            pass: "000000000000000000000000000000000000000000000",
          },
        });
        var mailOptions = {
          from: data.email,
          to:
            "000000000000000000000000000000000000000000000, 000000000000000000000000000000000000000000000",
          subject: "Subtext Message",
          text: message,
        };
        console.log("sending message");
        transporter.sendMail(mailOptions);
      }
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
