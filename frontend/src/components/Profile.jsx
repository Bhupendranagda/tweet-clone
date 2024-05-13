import Avatar from "react-avatar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";

const Profile = () => {
  const { user, profile } = useSelector((store) => store.user);
  // custom hooks
  const { id } = useParams();
  useGetProfile(id);
  const followUnfollowHandler = () => {};
  return (
    <div id="parent-div" className="w-[50%] border-l border-r border-gray-200">
      <div className="w-full">
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          >
            <IoIosArrowRoundBack size={"24px"} />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p className="text-sm text-gray-500 ">10 posts</p>
          </div>
        </div>
        <img
          className=" h-[200px] w-full "
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
        />
        <div className="absolute top-52 border-4 ml-2 border-blue-700 rounded-full">
          <Avatar
            src="https://th.bing.com/th/id/OIP.xY-QLoLc9e-s8TDMGxocvAHaEK?rs=1&pid=ImgDetMain"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right mt-4">
          {profile?._id === user?._id ? (
            <button className="px-4 py-1 rounded-full text-right border border-gray-400">
              Edit Profile
            </button>
          ) : (
            <button
              onClick={followUnfollowHandler}
              className="px-4 py-1  text-white rounded-full text-right border border-gray-400 bg-black "
            >
              {user.following.includes(id) ? "Following" : "Follow"}
            </button>
          )}
        </div>
        <div className="m-4 mt-6">
          <h1 className="text-xl font-bold">{profile?.name}</h1>
          <p>@{profile?.username}</p>
        </div>
        <div className="m-4 text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            voluptate quaerat necessitatibus laborum minima laudantium earum
            iure numquam id esse exercitationem temporibus modi animi quibusdam
            minus nam, saepe odit voluptates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
