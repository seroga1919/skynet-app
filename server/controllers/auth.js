/** @format */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  /* This makes the API call to the database to register a new user. */
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      userType,
      companyName,
      industry,
    } =
      req.body; /* From this we are gonna send these values to the database. */

    const salt =
      await bcrypt.genSalt(); /* This line of code is generating a salt for the password. */
    const passwordHash = await bcrypt.hash(
      password,
      salt
    ); /* This line of code is hashing the password. */

    const newUser = new User({
      /* This line of code is creating a new user. The way that this thing works is that we are gonna encrypt the password, we are gonna save it and after we save it
    when the user tries to login , thay are gonna provide the password and we arve gonna salt that again and then we are gonna make sure thats the correct one. Then we are gonna give them the JSONwebtoken */

      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      userType,
      companyName,
      industry,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json(
        savedUser
      ); /* With this line we are gonna let the front end know that the user has been created. And give the 201 code */
  } catch (err) {
    res.status(500).json({
      error: err.message,
    }); /* If there is an error we are gonna send the error message. */
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } =
      req.body; /* we are grabbing the e-mail and password, when the user is trying to login. */
    const user = await User.findOne({
      email: email,
    }); /* We are gonna use mongoose to try to find the one that has the specified e-mail and we are gonna bring it back to "await" */
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(
      password,
      user.password
    ); /* This is gonna determine, if we have the right password. We do this by comparing "(password -> user.password)", using the same salt to compare */
    if (!isMatch)
      return res.status(400).json({
        msg: "Invalid credentials. ",
      }); /* If the password is not a match, we are gonna send a message to the front end. */

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    ); /* This is gonna generate a token, that is gonna be used to authenticate the user. */
    delete user.password; /* This is gonna delete the password from the user, so that we are not sending the password to the front end for security reasons. */
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    }); /* In the future you should customize this error message. */
  }
};
