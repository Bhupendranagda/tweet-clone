import axios from "axios";
import { TWEET_API_ENDPOINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";
import toast from "react-hot-toast";
const useGetMyTweets = (id) => {
  const dispath = useDispatch();
  const { refresh, isActive } = useSelector((store) => store.tweet);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${TWEET_API_ENDPOINT}getalltweet/${id}`, {
        withCredentials: true,
      });
      dispath(getAllTweets(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };
  const followingTweetHandler = async () => {
    try {
      const res = await axios.get(
        `${TWEET_API_ENDPOINT}getFollowingTweets/${id}`,
        { withCredentials: true }
      );
      dispath(getAllTweets(res.data.tweets));
      if (res.data.message) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if (isActive) {
      fetchData();
    } else {
      followingTweetHandler();
    }
  }, [refresh, isActive]);
};

export default useGetMyTweets;
