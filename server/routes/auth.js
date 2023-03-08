/** @format */

import express from "express";
import { login } from "../controllers/auth.js";

const router =
  express.Router(); /* This piece of code will allow express to identify that these routes will all be configured and allows us to have that in separate files, to keep us organized. */

router.post(
  "/login",
  login
); /* Instead of doing app.use we will do router.post, and we will pass in the path and the controller function. */

export default router;
