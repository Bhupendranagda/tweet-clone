import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    // Basic  validation
    if (!description || !id) {
      return res.status(401).json({
        message: "Fields are required",
        success: false,
      });
    }
    const user = await User.findById(id).select("-password");
    await Tweet.create({
      description,
      userId: id,
      userDetails: user,
    });
    return res.status(200).json({
      message: "Tweet created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeOrdislike = async (req, res) => {
  try {
    const loggegInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);
    console.log("tqwet", tweet.like);
    if (tweet.like.length > 0 && tweet.like.includes(loggegInUserId)) {
      await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { like: loggegInUserId },
      });
      return res.status(200).json({
        message: "you disliked the tweet",
        success: true,
      });
    } else {
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { like: loggegInUserId },
      });

      return res.status(200).json({
        message: "You liked the tweet",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({ userId: id });
    console.log("Logged.in",loggedInUserTweets)
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );
    console.log("following",followingUserTweet)
    return res.status(200).json({
      tweets: loggedInUserTweets.concat(followingUserTweet.length > 0 ? followingUserTweet.flatMap(tweet => tweet) : []),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFollowingTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );
    return res.status(200).json({
      tweets: followingUserTweet.flatMap(tweet => tweet),
    });
  } catch (error) {
    console.log(error);
  }
};
