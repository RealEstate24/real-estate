/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import { createTransport } from "nodemailer";
import {
  ApiClient,
  DealsApi,
  NewDeal,
  NewPerson,
  PersonsApi,
  StagesApi
} from "pipedrive";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const apiClient = new ApiClient();
      const apiToken = apiClient.authentications.api_key;
      apiToken.apiKey = process.env.PIPEDRIVE_TOKEN;

      const personInstance = new PersonsApi(apiClient);
      const stagesInstance = new StagesApi(apiClient);
      const dealsInstance = new DealsApi(apiClient);

      const personOpts = NewPerson.constructFromObject({
        name: req.body.name,
        phone: [{ value: req.body.phone }]
      });

      const stages = await stagesInstance.getStages();

      if (!stages?.success) {
        throw stages;
      }

      const person = await personInstance.addPerson(personOpts);

      if (!person?.success) {
        throw person;
      }

      const firstContact = stages?.data?.find(
        (stage) =>
          stage.name === "Первичный контакт" && stage.pipeline_name === "M2M"
      );

      const dealsOpts = NewDeal.constructFromObject({
        title: `Сделка ${req.body.name}`,
        stage_id: firstContact?.id,
        person_id: person?.data?.id
      });

      const dealResp = await dealsInstance.addDeal(dealsOpts);
      res.status(200).json(dealResp);

      // const transporter = createTransport({
      //   port: 465,
      //   host: "smtp.gmail.com",
      //   auth: {
      //     user: "sergeyvasylenko4",
      //     pass: process.env.SMTP_PASSWORD
      //   },
      //   secure: true
      // });

      // const mailData = {
      //   from: "demo@demo.com",
      //   to: "sergeyvasylenko4@gmail.com",
      //   subject: "Заявка с сайта",
      //   text: `Заявка с сайта от: ${req.body.name}`,
      //   html: `
      //       <p>Имя: <strong>${req.body.name}</strong></p>
      //       <p>Телефон: <strong>${req.body.phone}</strong></p>
      //     `
      // };

      // transporter.sendMail(mailData, (err) => {
      //   if (err) {
      //     res.status(400).json(err);
      //     return;
      //   }

      //   res.status(200).json({ message: "Success!" });
      // });
    } catch (err) {
      res.status(401).json(err);
    }
  }
};
