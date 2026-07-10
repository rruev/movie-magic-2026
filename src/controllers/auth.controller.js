import { Router } from "express";
import authService from "../services/auth.service.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register", { title: "Register" });
});

authController.post("/register", async (req, res) => {
    const { email, password, rePassword } = req.body;

    await authService.register({ email, password, rePassword });
})

export default authController;