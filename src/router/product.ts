import express from 'express';

// import { isAuthenticated  } from "../middlewares";
import {
  createProduct,
  deleteProductByItsId,
  getAllProducts,
} from '../controllers/product';
export default (router: express.Router) => {
  router.post('/product', createProduct);
  router.get('/product', getAllProducts);
  router.delete('/product/:id', deleteProductByItsId);
};
