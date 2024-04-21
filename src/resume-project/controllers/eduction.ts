import express from 'express';
import { EducationModel } from '../models/Eduction';

export const createEducation = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const values = req.body;
    const education = await new EducationModel(values)
      .save()
      .then((savedItem) => savedItem.toObject());

    return res.status(200).json(education).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};
