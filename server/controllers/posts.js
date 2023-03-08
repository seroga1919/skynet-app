/** @format */

import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save(); /* We save the new post in the database */

    const post =
      await Post.find(); /* we makse sure we grab all the post and we can return */
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  /* Grab all the posts of everyone */
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  /* Grab all the posts of a specific user */
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params; /* Grab the id of the post */
    const { userId } = req.body; /* Grab the id of the user */
    const post = await Post.findById(id); /* Grab the post from the database */
    const isLiked =
      post.likes.get(userId); /* Check if the user already liked the post */

    if (isLiked) {
      post.likes.delete(
        userId
      ); /* If the user already liked the post, we delete the like */
    } else {
      post.likes.set(
        userId,
        true
      ); /* If the user didn't like the post, we add a like */
    }

    const updatedPost = await Post.findByIdAndUpdate(
      /* We update the post in the database */
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
