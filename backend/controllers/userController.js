import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All Fields are requried",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User Already exists",
        success: false,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All Fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User Does not Exists wtih this email",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect Email or password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.TOKENSECRET, {
      expiresIn: "1d",
    });
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "User logged out successfully",
    success: true,
  });
};

export const bookmarks = async (req, res) => {
  try {
    const loggegInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggegInUserId);
    if (user.bookmarks.length > 0 && user.bookmarks.includes(tweetId)) {
      await User.findByIdAndUpdate(loggegInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Removed from boomarks",
      });
    } else {
      await User.findByIdAndUpdate(loggegInUserId, {
        $push: { bookmarks: tweetId },
      });

      return res.status(200).json({
        message: "Added to bookmarks",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOthersUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const othersUsers = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );
    if (!othersUsers) {
      return res.status(401).json({
        message: "Currently do not have any users",
      });
    }
    return res.status(200).json({
      othersUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

export const follow = async (req, res) => {
  try {
    const loggegInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggegInUserId);
    const user = await User.findById(userId);
    if (!user.followers.includes(loggegInUserId)) {
      await user.updateOne({ $push: { followers: loggegInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User Already followed to ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} jsut follow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollow = async (req, res) => {
  try {
    const loggegInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggegInUserId);
    const user = await User.findById(userId);
    if (loggedInUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggegInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User has not followed yet`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} unfollow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
