/** @format */

import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get(
  "/",
  verifyToken,
  getFeedPosts
); /* This will get every single post from the database */
router.get(
  "/:userId/posts",
  verifyToken,
  getUserPosts
); /* This will get certain user's posts from the database */

/* UPDATE */
router.patch(
  "/:id/like",
  verifyToken,
  likePost
); /* It will get saved if you liked it or not */

export default router;
