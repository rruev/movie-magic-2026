import { Router } from "express";

const actorController = Router();

actorController.get("/create", (req, res) => {
    res.render("actors/create", { title: "Create Actor" });
});

actorController.post("/create", (req, res) => {
    const actorData = req.body;
    console.log("Actor Data:", actorData);

    res.redirect("/");
});

export default actorController;