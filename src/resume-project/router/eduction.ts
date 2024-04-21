import express from 'express';
import { createEducation } from '../controllers/eduction';

export default (router: express.Router) => {
  router.post('/education', createEducation);
};
