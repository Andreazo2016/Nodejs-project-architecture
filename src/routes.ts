import { Router } from 'express';
import { userController } from './controllers/UserController';

const routes = Router();


routes.post('/users', (request, response) => {
    return userController.createUser(request, response);
})