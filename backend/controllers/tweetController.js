import { Tweet } from "../models/tweetSchema.js";

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
    await Tweet.create({
      description,
      userId: id,
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
        message: "User disliked your tweet",
      });
    } else {
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { like: loggegInUserId },
      });

      return res.status(200).json({
        message: "User liked your tweet",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
