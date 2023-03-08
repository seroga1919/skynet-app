/** @format */

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(
  import.meta.url
); /* This line of code is converting the import.meta.url from a file URL to a file path string and storing it in the __filename constant variable, which can then be used to reference the current module's file path within the local file system. */
const __dirname =
  path.dirname(
    __filename
  ); /* This line of code is getting the directory name of the current module's file path and storing it in the __dirname constant variable, which can then be used to reference the current module's directory path within the local file system. */
dotenv.config(); /* This line of code is loading the environment variables from the .env file into the process.env object. */
const app =
  express(); /* This line of code is creating an Express application and storing it in the app constant variable, which can then be used to reference the Express application. */
app.use(
  express.json()
); /* This line of code is parsing the incoming request bodies in a middleware before your handlers, available under the req.body property. */
app.use(
  helmet()
); /* This line of code is setting the HTTP headers to protect the Express application from well-known web vulnerabilities by setting various HTTP headers. */
app.use(
  helmet.crossOriginResourcePolicy({ policy: "cross-origin" })
); /* This line of code is setting the Cross-Origin-Resource-Policy HTTP header to cross-origin to prevent the browser from loading any cross-origin images, fonts, or media. */
app.use(
  morgan("common")
); /* This line of code is logging the HTTP requests to the console using the morgan middleware. */
app.use(
  bodyParser.json({ limit: "30mb", extended: true })
); /* This line of code is parsing the incoming request bodies in a middleware before your handlers, available under the req.body property. */
app.use(
  bodyParser.urlencoded({ limit: "30mb", extended: true })
); /* This line of code is parsing the incoming request bodies in a middleware before your handlers, available under the req.body property. */
app.use(cors()); /* This line of code is enabling CORS for all routes. */
app.use(
  "/assets",
  express.static(path.join(__dirname, "public/assets"))
); /* This line of code is serving static files such as images, CSS files, and JavaScript files in a directory named public. */

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
/* This line of code is creating a storage engine for the multer middleware. */ /* This is the endpoint when our client tries to register a new user, then the middlewear takes the picture and passes it to register function */

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post(
  "/posts",
  verifyToken,
  upload.single("picture"),
  createPost
); /* If u upload a picture, this will upload it */

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
/* This line of code is setting the port number for the Express application. And the backup port just incase this port wont work for some reason */
mongoose
  .connect(process.env.MONGO_URL, {
    /* This line of code is connecting to the MongoDB database using the MONGO_URL environment variable that we just created in the .env file. */
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    //User.insertMany(users);
    //Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
