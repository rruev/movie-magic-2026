import { Router } from "express";
import actorService from "../services/actors.service.js";

const actorController = Router();

actorController.get("/create", (req, res) => {
    res.render("actors/create", { title: "Create Actor" });
});

actorController.post("/create", async (req, res) => {
    const actorsData = req.body;

    await actorService.create(actorsData);

    res.redirect("/");
});

export default actorController;