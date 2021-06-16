const { Router } = require('express');

const AuthMiddleware = require('./app/Middlewares/AuthMiddleware')
const LoginController = require('./app/Controllers/LoginController')
const UserController = require('./app/Controllers/UserController')

const routes = new Router();

routes.post("/user", UserController.store);
routes.get("/user", AuthMiddleware, UserController.show);
routes.post("/login", LoginController.index);


module.exports = routes;