import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
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
              <h1 className="font-bold">honey</h1>
              <p className="text-gray-500 text-sm ml-2">@honeycoder99 . 1m</p>
            </div>
            <div>
              <p>Hello this is my first tweet enjoy my first tweet</p>
            </div>
            <div id="options-section" className="flex justify-between  ">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer flex">
                  <FaRegComment size={"20px"} />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-red-200 rounded-full cursor-pointer flex">
                  <CiHeart size={"22px"} />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-200 rounded-full cursor-pointer flex">
                  <CiBookmark size={"22px"} />
                </div>
                <p> 0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
