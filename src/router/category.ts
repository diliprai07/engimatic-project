import express from 'express';

// import { isAuthenticated  } from "../middlewares";
import {
  createProductCategory,
  deleteByCategory,
  getProductCategories,
} from '../controllers/category';
export default (router: express.Router) => {
  router.post('/product/category', createProductCategory);
  router.get('/product/category', getProductCategories);
  router.delete('/product/category/:id', deleteByCategory);
};
