import dotenv from "dotenv"
import {app} from './app.js'
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
});