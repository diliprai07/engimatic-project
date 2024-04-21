import express from 'express';
import { WorkModel } from '../models/Work';

export const createWork = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const values = req.body;
    const work = await new WorkModel(values)
      .save()
      .then((savedItem) => savedItem.toObject());

    return res.status(200).json(work).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};
