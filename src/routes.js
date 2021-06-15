const { Router } = require('express');

const UserController = require('./app/Controllers/UserController')

const routes = new Router();

routes.post("/user", UserController.index);

module.exports = routes;