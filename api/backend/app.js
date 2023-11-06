import express, { json } from "express";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./src/routes/user.routes.js";
import authRoute from "./src/routes/auth.routes.js";

const corsOptions = {
  origin: "http://localhost:3001",
};

dotenv.config();

const app = express();

app.use(json());
app.use(cors(corsOptions));
app.use("/user", userRoute);
app.use("/auth", authRoute);

const port = process.env.PORT || 3000;

connectDatabase();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
