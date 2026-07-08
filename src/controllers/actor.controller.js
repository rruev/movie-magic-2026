import { Router } from "express";

const actorController = Router();

actorController.get("/create", (req, res) => {
    res.render("actors/create", { title: "Create Actor" });
});

export default actorController;