const { Router } = require('express');

const UserController = require('./app/Controllers/UserController')

const routes = new Router();

routes.post("/user", UserController.index);
routes.get("/user", UserController.show);

module.exports = routes;