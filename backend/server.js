import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import cors from "cors"
import customerRoutes from "./routes/customerRoutes.js";
import allcustomerRoutes from "./routes/allcustomerRoutes.js"
import alluserRoutes from "./routes/alluserRoutes.js";
import updatecustomerRoutes from "./routes/updatecustomerRoutes.js"
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser"

dotenv.config();

connectDB();


const app = express(); // main thing
app.use(cors())
app.use(cookieParser());
app.use(express.json()); // to accept json data


app.use("/api/users", userRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/adminclient", allcustomerRoutes);
app.use("/api/allpartners", alluserRoutes);
app.use("/api/uploaddoc", allcustomerRoutes, updatecustomerRoutes);


// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
 
}
// --------------------------deployment------------------------------

// Error Handling middlewares

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
