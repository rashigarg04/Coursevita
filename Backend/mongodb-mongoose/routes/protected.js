const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Middleware to check token
const auth = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Bearer <token>
    if (!token) return res.status(401).json({ message: "Access denied. No token." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token" });
    }
};

// Protected route
router.get("/", auth, (req, res) => {
    res.json({ message: "Welcome to protected route ✅", userId: req.user.id });
});

module.exports = router;
