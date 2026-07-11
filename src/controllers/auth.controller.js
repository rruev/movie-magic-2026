import { Router } from "express";
import authService from "../services/auth.service.js";
import { isGuest, isAuthenticated } from "../middleware/auth.middleware.js";

const authController = Router();

authController.get("/register", isGuest, (req, res) => {
    res.render("auth/register", { title: "Register" });
});

authController.post("/register", isGuest, async (req, res) => {
    const { email, password, rePassword } = req.body;

    const token = await authService.register({ email, password, rePassword });
    res.cookie("auth_token", token, { httpOnly: true });

    res.redirect("/");
})

authController.get("/login", isGuest, (req, res) => {
    res.render("auth/login", { title: "Login" });
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