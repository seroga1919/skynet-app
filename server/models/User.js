/** @format */

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    companyName: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    location: String,
    occupation: String,
    userType: String,
    companyName: String,
    industry: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
  /* This line of code is adding two fields to the schema, createdAt and updatedAt. The type assigned to these fields is Date. Mongoose adds them to your schema*/
);

const User = mongoose.model("User", UserSchema);
export default User;
