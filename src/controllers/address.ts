import { createAddress } from '../models/address';
import express from 'express';
import { authentication, random } from '../helpers';

export const createUserAddress = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { street, city, state, zip, owner } = req.body;
    if (!street || !city || !state || !zip || !owner) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createAddress({
      state,
      city,
      street,
      zip,
      owner,
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
