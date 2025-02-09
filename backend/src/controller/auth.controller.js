import UserModel from "../models/user.model.js";
import { customError } from "../utils/CustomError.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
let salt = bcrypt.genSaltSync(10);

export const signUp = async (req, res, next) => {
  console.log(req.body);
  const { username, password, email } = req.body;

  try {
    let hashedpassword = bcrypt.hashSync(password, salt);

    const user = await UserModel.create({
      username,
      email,
      password: hashedpassword,
    });
    res.json({ success: "true", user });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  console.log(req.body + "===");

  let { email, password } = req.body;
  try {
    let validUser = await UserModel.findOne({ email });
    if (!validUser) return next(customError(401, "User not Found"));

    let validpassword = bcrypt.compareSync(password, validUser.password);
    if (!validpassword)
      return next(customError(401, "Password did not match"));

    // Remove password from the response
    const { password: hashedpassword, ...rest } = validUser._doc;

    // Generate a token with 1-year expiration
    const token = jwt.sign({ id: validUser._id }, "Kuchbhilikhde", {
      expiresIn: "365d", // 1 year expiration
    });
    
    res
      .cookie("token", token, {
        sameSite: "None",
        httpOnly: true,
        secure: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const userVerification = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, "Kuchbhilikhde", {}, async (err, usertoken) => {
      if (err) throw err;
      const { username, email, _id, profile,role } = await UserModel.findById(
        usertoken.id
      );

      res.json({ email, _id, username, profile,role });
    });
  }
};

export const userLogout = (req, res) => {
  console.log(req.cookies);
  console.log("Logout Req coming");
  res
    .clearCookie("token", { secure: true, httpOnly: true, sameSite: "none" })
    .send({ message: "Cookies Cleared Successfully" });
};
