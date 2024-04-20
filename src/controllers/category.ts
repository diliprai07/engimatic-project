import { createAddress } from '../models/address';
import express from 'express';
import { authentication, random } from '../helpers';
import {
  CategoryModel,
  deleteByCategoryId,
  getCategories,
  updateCategoryById,
} from '../models/category';

export const createProductCategory = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { title, slug } = req.body;
    if (!title || !slug) {
      return res.sendStatus(400);
    }

    const categoy = new CategoryModel({
      ...req.body,
    });

    const categoryDoc = await categoy.save();

    return res
      .status(200)
      .json({
        success: true,
        message: 'Category has been added successfully',
        category: categoryDoc,
      })
      .end();
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const getProductCategories = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const categories = await getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const deleteByCategory = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;

    
    const deletedData = await deleteByCategoryId(id);

    return res.status(200).json(deletedData).end();
    // return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const updateCategory = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    const updationData = req.body;
    const categoryData = updateCategoryById(id, updationData);

    return res.status(200).json(categoryData).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};
