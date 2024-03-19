import express from 'express';
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';

import { isAuthenticated, isOwner } from '../middlewares';
export default (router: express.Router) => {
  /**
   * @openapi
   * tags:
   *   name: Hello
   *   description: Greetings API from TheCodeBUzz
   */

  /**
   * @openapi
   * path:
   *  /users:
   *    get:
   *      summary: Get greeting message from TheCodebuzz
   *      responses:
   *        "200":
   *          description: GET reponse from API
   *          content:
   *            application/json:
   *              schema:
   *                type: string
   */
  router.get('/users', isAuthenticated, getAllUsers);
  // router.delete('/users/:id',isAuthenticated,isOwner,deleteUser);
  // router.patch('/users/:id',isAuthenticated,updateUser);
};
