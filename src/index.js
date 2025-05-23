import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

import connectDB from "./db/index.js";






connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
});



// ______First Approach__________



// import express from "express";
// import dotenv from "dotenv";

// const app = express();

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("Error connecting to MongoDB:", error);
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port https://localhost:${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// })()