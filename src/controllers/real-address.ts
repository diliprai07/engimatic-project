import express from 'express';
import { RealAddressModal } from '../models/real-address';

export const createRealAddress = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const user = req.body.user;

    const address = new RealAddressModal({
      ...req.body,
      user: user._id,
    });

    const addressDoc = await address.save();

    res.status(200).json({
      success: true,
      message: `Address has been added successfully!`,
      address: addressDoc,
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.',
    });
  }
};
