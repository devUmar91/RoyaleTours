import jwt from "jsonwebtoken";
import { customError } from "../utils/CustomError.js";
import userModel from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return next(customError(404, "You are not authenticated!"));

  try {
    const decoded = jwt.verify(token, "Kuchbhilikhde"); // Access JWT secret

    const user = await userModel.findById(decoded.id);
    if (!user) {
      return next(customError(404, "User not found!"));
    }

    req.user = user; // Attach user information to the request object
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return next(customError(403, "Token has expired. Please log in again."));
    } else {
      return next(customError(403, "Token is not valid."));
    }
  }
};
