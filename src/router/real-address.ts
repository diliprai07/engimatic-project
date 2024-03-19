import express from 'express';

import { isAuthenticated } from '../middlewares';
import { createRealAddress } from '../controllers/real-address';
export default (router: express.Router) => {
  router.post('/real-address', isAuthenticated, createRealAddress);
};
