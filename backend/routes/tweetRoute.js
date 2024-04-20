import express from "express";
import {
  createTweet,
  deleteTweet,
  likeOrdislike,
} from "../controllers/tweetController.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrdislike);

export default router;