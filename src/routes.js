const { Router } = require('express');

const AuthMiddleware = require('./app/Middlewares/AuthMiddleware')
const LoginController = require('./app/Controllers/LoginController')
const UserController = require('./app/Controllers/UserController')
const CarController = require('./app/Controllers/CarController')

const routes = new Router();

routes.post("/user", UserController.store);
routes.get("/user", AuthMiddleware, UserController.show);
routes.post("/login", LoginController.index);

routes.post("/car", AuthMiddleware, CarController.add)
routes.get("/car", AuthMiddleware, CarController.findAll)
routes.get("/car/:id", AuthMiddleware, CarController.findById)
routes.delete("/car/:id", AuthMiddleware, CarController.delete)
routes.patch("/car/:id", AuthMiddleware, CarController.update)


module.exports = routes;