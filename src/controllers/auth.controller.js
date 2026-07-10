import { Router } from "express";
import authService from "../services/auth.service.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register", { title: "Register" });
});

authController.post("/register", async (req, res) => {
    const { email, password, rePassword } = req.body;

    await authService.register({ email, password, rePassword });

    res.redirect("/auth/login");
})

authController.get("/login", (req, res) => {
    res.render("auth/login", { title: "Login" });
});

authController.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Implement login logic here

    res.redirect("/");
});

export default authController;