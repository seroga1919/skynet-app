/** @format */

import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */ /* The read routes represent routes that we use to read not edit data. */
router.get("/:id", verifyToken, getUser); /* This will get the users data */
router.get(
  "/:id/friends",
  verifyToken,
  getUserFriends
); /* This will get the users friends if we need it*/

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
