import express from "express";
import {
  createTweet,
  deleteTweet,
  getAllTweets,
  getFollowingTweets,
  likeOrdislike,
} from "../controllers/tweetController.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrdislike);
router.route("/getalltweet/:id").get(isAuthenticated, getAllTweets);
router
  .route("/getFollowingTweets/:id")
  .get(isAuthenticated, getFollowingTweets);

export default router;
