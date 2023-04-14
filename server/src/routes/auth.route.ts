import express from "express";
import { authenticateUser } from "../controllers/auth.controller";
import passport from "passport";

const router = express.Router();

router.post("/auth", passport.authenticate("google-one-tap"), (req, res) => {
    res.json({user: req.user})
});
export default router;