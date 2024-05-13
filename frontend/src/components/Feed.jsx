import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  const { tweets } = useSelector((store) => store.tweet);
  console.log("TWEETS", tweets);
  return (
    <div className=" w-[50%] border border-gray-400">
      <div>
        <CreatePost />
        {tweets?.map((tweet) => {
          return <Tweet key={tweet?._id} tweet={tweet} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
