import express from 'express';

import { isAuthenticated } from '../middlewares';
import { createUserAddress } from '../controllers/address';
export default (router: express.Router) => {
  router.post('/address', isAuthenticated, createUserAddress);
};
