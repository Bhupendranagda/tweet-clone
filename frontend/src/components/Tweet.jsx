import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_ENDPOINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import tweetSlice, { getRefresh } from "../redux/tweetSlice";
import { MdDeleteOutline } from "react-icons/md";
const Tweet = ({ tweet }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const likeDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_API_ENDPOINT}like/${id}`,
        {
          id: user?._id,
        },
        { withCredentials: true }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const deleteTweetHandler = async (id) => {
    try {
      const res = await axios.delete(
        `${TWEET_API_ENDPOINT}delete/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.success(error.response.data.message);
    }
  };

  return (
    <div id="parent" className="border-b border-gray-300">
      <div id="tweet-div">
        <div id="avatar-username" className="flex p-4">
          <Avatar
            src="https://th.bing.com/th/id/OIP.xY-QLoLc9e-s8TDMGxocvAHaEK?rs=1&pid=ImgDetMain"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center ">
              <h1 className="font-bold">{`${tweet?.userDetails[0]?.name}`}</h1>
              <p className="text-gray-500 text-sm ml-2">
                {` @${tweet?.userDetails[0]?.username}. ${tweet?.updatedAt}`}
              </p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div id="options-section" className="flex justify-between  ">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer flex">
                  <FaRegComment size={"20px"} />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div
                  onClick={() => likeDislikeHandler(tweet?._id)}
                  className="p-2 hover:bg-red-200 rounded-full cursor-pointer flex"
                >
                  <CiHeart size={"22px"} />
                </div>
                <p>{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-200 rounded-full cursor-pointer flex">
                  <CiBookmark size={"22px"} />
                </div>
                <p> 0</p>
              </div>
              {tweet?.userId === user?._id && (
                <div
                  onClick={() => deleteTweetHandler(tweet?._id)}
                  className="flex items-center"
                >
                  <div className="p-2 hover:bg-red-400 rounded-full cursor-pointer flex">
                    <MdDeleteOutline size={"22px"} />
                  </div>
                  <p> 0</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
