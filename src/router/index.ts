import express from 'express';
import authentication from './authentication';
import users from './users';
import address from './address';
import realAddress from './real-address';
import prdouctCategory from './category';
import product from './product';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  address(router);
  realAddress(router);
  prdouctCategory(router);
  product(router);
  return router;
};
