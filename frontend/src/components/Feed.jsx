import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className=" w-[50%] border border-gray-400">
      <div>
        <CreatePost />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Feed;
