import { Router } from "express";
import authService from "../services/auth.service.js";
import { isGuest, isAuthenticated } from "../middleware/auth.middleware.js";
import { createUserSchema } from "../schemas/user.schema.js";
import { getErrorMessage } from "../utils/error.util.js";

const authController = Router();

authController.get("/register", isGuest, (req, res) => {
    res.render("auth/register");
});

authController.post("/register", isGuest, async (req, res) => {
    try {
        const userData = createUserSchema.parse(req.body);

        const token = await authService.register(userData);
        res.cookie("auth_token", token, { httpOnly: true });
    
        res.redirect("/");
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render("auth/register", { error: errorMessage, userData: req.body });
    }

})

authController.get("/login", isGuest, (req, res) => {
    res.render("auth/login");
});

authController.post("/login", isGuest, async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login({ email, password });
    res.cookie("auth_token", token, { httpOnly: true });

    res.redirect("/");
});

authController.get("/logout", isAuthenticated, (req, res) => {
    res.clearCookie("auth_token");
    res.redirect("/");
});

export default authController;