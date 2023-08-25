const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { BlacklistModel } = require("../models/blacklist.model");
userRouter.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({
                message: "User already exists, please login",
                auth: false,
            });
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.json({ err: err.message });
            } else {
                const user = new UserModel({ ...req.body, password: hash });
                await user.save();
                res.json({
                    message: "User has been Registered successfully",
                    auth: true,
                });
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ message: "Email not found", auth: false });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.json({ message: "Incorrect Password", auth: false });
        }
        const token = jwt.sign(
            { userId: user._id, user: user.name },
            process.env.secretKey,
            {
                expiresIn: "7d",
            }
        );
        res.json({ message: "Login successful", token, user, auth: true });
    } catch (error) {
        res.json({ message: error.message });
    }
});

userRouter.get("/logout", async (req, res) => {
    try {
        let token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.send({
                msg: "You are not logged in !!",
            });
        }

        let existingBlacklist = await BlacklistModel.find({
            tokens: { $in: token },
        });

        if (existingBlacklist[0]?.tokens.includes(token) === false) {
            await BlacklistModel.updateOne(
                {},
                { $push: { tokens: token } },
                { upsert: true }
            );
        } else {
            res.send({
                msg: "You have already logged out !!",
            });
            return;
        }

        console.log("inside logout", existingBlacklist[0]?.tokens.includes(token));

        res.status(200).send({
            msg: `Logged out successfully`,
        });
    } catch (error) {
        res.status(500).send({
            msg: `Something went wrong while logout , ${error.message}`,
        });
    }
});
module.exports = {
    userRouter,
};