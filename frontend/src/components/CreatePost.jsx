import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div id="parent" className="w-[100%]">
      <div className="">
        <div
          id="navvbar"
          className="flex items-center justify-evenly border-b border-gray-200"
        >
          <div className="cursor-pointer hover:bg-slate-100 w-full text-center px-4 py-3">
            <h1 className="font-bold text-gray-600 text-lg cursor-pointer">
              For You
            </h1>
          </div>
          <div className="cursor-pointer hover:bg-slate-100 w-full text-center px-4 py-3">
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
