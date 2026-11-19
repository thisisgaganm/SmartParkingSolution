
import express from "express";
import cors from "cors";

const app = express();


// MIDDLEWARE

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173"
    })
);

app.use(express.json());


// ROOT ROUTE

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Smart Parking System API is running"
    });
});


// HEALTH CHECK

app.get("/api/health", (req, res) => {

    res.status(200).json({

        success: true,

        application: "Smart Parking System",

        server: "Online",

        environment: process.env.NODE_ENV || "development",

        timestamp: new Date().toISOString()

    });

});


// UNKNOWN API ROUTE

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "API route not found"

    });

});


// ERROR HANDLER

app.use((err, req, res, next) => {

    console.error("Server Error:", err);

    res.status(500).json({

        success: false,

        message: "Internal server error"

    });

});


export default app;
