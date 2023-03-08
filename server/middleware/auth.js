/** @format */

import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token =
      req.header(
        "Authorization"
      ); /* We from the backend are grabing the token that has been set on the frontend. */

    if (!token) {
      return res
        .status(403)
        .send(
          "Access Denied"
        ); /* If there is no token we are gonna send a 403 error. */
    }

    if (token.startsWith("Bearer ")) {
      /* We need to make sure that the token starts with Bearer string. */
      token = token
        .slice(7, token.length)
        .trimLeft(); /* We are gonna be taking everything from the right side of the Bearer string. */
    }

    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET
    ); /* This is where we verify our JWT token, that we created earlier. */
    req.user = verified;
    next(); /* next funtion, that we have to use for the middleware, so that it can move on to the next middleware. */
  } catch (err) {
    res
      .status(500)
      .json({
        error: err.message,
      }); /* In the future you should customize this error message. */
  }
};
