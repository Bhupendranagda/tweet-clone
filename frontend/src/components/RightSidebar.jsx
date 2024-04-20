import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSidebar = () => {
  return (
    <div className="bg-emerald-300 w-[25%]">
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
        <div className="flex items-center justify-between my-2">
          <div className="flex ">
            <div>
              <Avatar
                src="https://th.bing.com/th/id/OIP.xY-QLoLc9e-s8TDMGxocvAHaEK?rs=1&pid=ImgDetMain"
                size="40"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Patel</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;