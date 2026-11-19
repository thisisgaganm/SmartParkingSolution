import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("----------------------------------");

    console.log(" SMART PARKING SYSTEM BACKEND ");

    console.log("----------------------------------");

    console.log(`Server running on port ${PORT}`);

    console.log(`http://localhost:${PORT}`);

    console.log("----------------------------------");

});