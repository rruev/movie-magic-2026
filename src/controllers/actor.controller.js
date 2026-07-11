import { Router } from "express";
import actorService from "../services/actors.service.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const actorController = Router();

actorController.get("/create", isAuthenticated, (req, res) => {
    res.render("actors/create", { title: "Create Actor" });
});

actorController.post("/create", isAuthenticated, async (req, res) => {
    const actorsData = req.body;

    await actorService.create(actorsData);

    res.redirect("/");
});

export default actorController;