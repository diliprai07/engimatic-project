import express from 'express';
import { ResumeModel } from '../models/Resume';

export const createResume = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const values = req.body;
    const resume = await new ResumeModel(values)
      .save()
      .then((savedItem) => savedItem.toObject());

    return res.status(200).json(resume).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};
