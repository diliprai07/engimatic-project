import express from 'express';
import { createResume } from '../controllers/resume';

export default (router: express.Router) => {
  router.post('/education', createResume);
};
