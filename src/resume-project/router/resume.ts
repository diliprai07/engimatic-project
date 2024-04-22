import express from 'express';
import { createResume, getResumesByEmail } from '../controllers/resume';

export default (router: express.Router) => {
  router.post('/resume', createResume);
  router.get('/resume', getResumesByEmail);
};
