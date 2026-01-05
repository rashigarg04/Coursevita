const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // LOGIN
        router.post("/login", async (req, res) => {
            try {
                const { email, password } = req.body;

                // Find user
                const user = await User.findOne({ email });
                if (!user) return res.status(400).json({ message: "Invalid credentials" });

                // Compare password
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

                // Create JWT
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

                res.json({ token });
            } catch (err) {
                console.log(err);
                res.status(500).json({ message: "Server error ❌" });
            }
        });


        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User created successfully ✅" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error ❌" });
    }
});

module.exports = router;
