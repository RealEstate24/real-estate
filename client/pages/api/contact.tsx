/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import { createTransport } from "nodemailer";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const transporter = createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "sergeyvasylenko4",
          pass: process.env.SMTP_PASSWORD
        },
        secure: true
      });

      const mailData = {
        from: "demo@demo.com",
        to: "sergeyvasylenko4@gmail.com",
        subject: "Заявка с сайта",
        text: `Заявка с сайта от: ${req.body.name}`,
        html: `
            <p>Имя: <strong>${req.body.name}</strong></p>
            <p>Телефон: <strong>${req.body.phone}</strong></p>
          `
      };

      transporter.sendMail(mailData, (err) => {
        if (err) {
          res.status(400).json(err);
          return;
        }

        res.status(200).json({ message: "Success!" });
      });
    } catch (err) {
      res.status(401).json(err);
    }
  }
};
