import express from 'express';
import { createWork } from '../controllers/work';

export default (router: express.Router) => {
  router.post('/education', createWork);
};
