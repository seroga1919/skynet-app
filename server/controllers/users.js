/** @format */

import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  /* We just need to send back to the front end relevant to this user, when we find it */
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(
      id
    ); /* grab all the informatsion from the friend id-s */

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      /* We are gonna make sure that we can format this propper way for the front end */
      ({
        _id,
        firstName,
        lastName,
        occupation,
        userType,
        location,
        picturePath,
      }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          userType,
          location,
          picturePath,
        };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      /* If the friendID is already in the friends array, we are gonna remove it */
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(
        friendId
      ); /* If the friendID is not in the friends array, we are gonna add it */
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({
        _id,
        firstName,
        lastName,
        occupation,
        userType,
        companyName,
        industry,
        location,
        picturePath,
      }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          userType,
          companyName,
          industry,
          location,
          picturePath,
        };
      }
    );

    res
      .status(200)
      .json(
        formattedFriends
      ); /* We are gonna send back the updated friends array */
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
