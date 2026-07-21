import { Router } from "express";
import actorService from "../services/actors.service.js";
import { createActorSchema } from "../schemas/actor.schema.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import { getErrorMessage } from "../utils/error.util.js";

const actorController = Router();

actorController.get("/create", isAuthenticated, (req, res) => {
    res.render("actors/create", { title: "Create Actor" });
});

actorController.post("/create", isAuthenticated, async (req, res) => {
    try {
        const actorsData = createActorSchema.parse(req.body);
        await actorService.create(actorsData);
        res.redirect("/");
    } catch (error) {
        // Handle validation or other errors here
        const errorMessage = getErrorMessage(error);
        return res.status(400).render("actors/create", { title: "Create Actor", error: errorMessage, actorsData: req.body });
    }

});

export default actorController;