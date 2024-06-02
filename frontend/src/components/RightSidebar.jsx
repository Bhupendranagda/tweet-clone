import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const RightSidebar = ({ otherUsers }) => {
  return (
    <div className="  w-[25%]">
      <div className=" flex items-center rounded-full bg-gray-100 mt-1">
        <CiSearch size={"25px"} className="ml-1 cursor-pointer" />
        <input
          type="text"
          className="bg-transparent outline-none px-2 py-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to Follow</h1>
        {otherUsers?.map((user) => {
          return (
            <div
              key={user._id}
              className="flex items-center justify-between my-2"
            >
              <div className="flex ">
                <div>
                  <Avatar
                    src="https://th.bing.com/th/id/OIP.xY-QLoLc9e-s8TDMGxocvAHaEK?rs=1&pid=ImgDetMain"
                    size="40"
                    round={true}
                  />
                </div>
                <div className="ml-2">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">{user?.username}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user?._id}`}>
                  <button className="px-4 py-1 bg-black text-white rounded-full">
                    Profile
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
