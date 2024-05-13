import axios from "axios";
import { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { TWEET_API_ENDPOINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getAllTweets, getIsActive, getRefresh } from "../redux/tweetSlice";

const CreatePost = () => {
  const { user } = useSelector((store) => store.user);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { isActive } = useSelector((store) => store.tweet);

  const forYouHandler = () => {
    dispatch(getIsActive(true));
  };

  const followingHandler = () => {
    dispatch(getIsActive(false));
  };

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${TWEET_API_ENDPOINT}create`,
        { description, id: user?._id },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
        setDescription("");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("ERRoR: ", error);
    }
  };
  return (
    <div id="parent" className="w-[100%]">
      <div className="">
        <div
          id="navvbar"
          className="flex items-center justify-evenly border-b border-gray-200"
        >
          <div
            onClick={forYouHandler}
            className={`${
              isActive ? "border-b-4 border-blue-600" : null
            } cursor-pointer hover:bg-slate-100 w-full text-center px-4 py-3`}
          >
            <h1 className="font-bold text-gray-600 text-lg cursor-pointer">
              For You
            </h1>
          </div>
          <div
            onClick={followingHandler}
            className={`${
              isActive ? null : "border-b-4 border-blue-600"
            } cursor-pointer hover:bg-slate-100 w-full text-center px-4 py-3`}
          >
            <h1 className="font-bold text-gray-600 text-lg ">Following</h1>
          </div>
        </div>
        <div id="post" className="">
          <div id="post-text" className="flex items-center p-4">
            <div>
              <Avatar
                src="https://th.bing.com/th/id/OIP.xY-QLoLc9e-s8TDMGxocvAHaEK?rs=1&pid=ImgDetMain"
                size="40"
                round={true}
              />
            </div>
            <input
              className="ml-2 w-full outline-none border-none text-lg "
              type="text"
              placeholder="What's happening? "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div
            id="button-post"
            className="flex items-center justify-between border-b border-gray-300 pt-4 pr-4 pl-4 pb-2 "
          >
            <div className="flex  items-center gap-2">
              <CiImageOn size={"25px"} />
              <CiImageOn size={"25px"} />
            </div>
            <button
              className="px-4 py-2 border-none text-md bg-[#1D9BF0] 
           rounded-full text-white font-bold mt-2"
              onClick={(e) => submitHandler()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
