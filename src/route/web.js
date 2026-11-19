import express from "express";
import homeController from "../controllers/homeController";
let route = express.Router();

let initWebRoutes = (app) => {
    route.get('/', homeController.getHomepage);
    route.get('/about', homeController.getAboutpage);



    return app.use("/", route);
}

module.exports = initWebRoutes;
