import { Router } from "express"

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register", { title: "Register" });
});

export default authController;