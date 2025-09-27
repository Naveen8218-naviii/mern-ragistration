const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const regismodel = require("./model/model");

// CORS configuration (applied globally)
app.use(cors({
    origin: "https://mern-registration-a4vb-ntzq3f9p-...vercel.app", // Update with correct deployed URL
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.use(express.json());

// MongoDB connection with error handling
mongoose.connect('mongodb+srv://naviii:nabu@cluster0.30irrxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Registration route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    regismodel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("exist");
            } else {
                regismodel.create({ name, email, password })
                    .then(result => res.json("Account created"))
                    .catch(err => res.status(500).json({ error: err.message }));
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

// Login route
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    regismodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("incorrect password");
                }
            } else {
                res.json("no record existed");
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

// Handle favicon and root requests
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/', (req, res) => res.status(200).json({ message: "Server is running" }));

// Export for Vercel
module.exports = app;
