import { createAddress } from '../models/address';
import express from 'express';
import {
  ProductModal,
  deleteProductById,
  getProducts,
  updateProductById,
} from '../models/product';
import mongoose from 'mongoose';

export const createProduct = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const product = new ProductModal({
      ...req.body,
    });

    const productDoc = await product.save();

    return res
      .status(200)
      .json({
        success: true,
        message: 'Product has been added successfully',
        category: productDoc,
      })
      .end();
  } catch (error) {
    // Check if the error is a Mongoose validation error
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = {};
      // Extract error messages for each field
      for (const field in error.errors) {
        // @ts-ignore
        errors[field] = error.errors[field].message;
      }
      // Send validation error response
      res.status(400).json({ errors });
    } else {
      // For other types of errors, send a generic error response
      res.status(500).json({ error: 'Server Error' });
    }
  }
};

export const getAllProducts = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    // @ts-ignore
    const page = parseInt(req.query.page) || 1; // Current page number, default 1
    // @ts-ignore
    const limit = parseInt(req.query.limit) || 10; // Number of items per page, default 10

    const productCode = req.query.productCode as string; // Product Code filter query

    const products = await getProducts(page, limit, productCode);
    return res.status(200).json(products);
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const deleteProductByItsId = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    const deletedData = await deleteProductById(id);

    return res.status(200).json(deletedData).end();
    // return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const updateProduct = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    const updationData = req.body;
    const productData = updateProductById(id, updationData);

    return res.status(200).json(productData).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};
