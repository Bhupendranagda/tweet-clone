import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_ENDPOINT } from "../utils/constant";
import axios from "axios";
import toast from "react-hot-toast";
import { getMyProfile, getOtherUsers, getUser } from "../redux/userSlice";

const LeftSidebar = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = async() =>{
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}logout`)
      toast.success(res.data.message)
      dispatch(getUser(null))
      dispatch(getOtherUsers(null))
      dispatch(getMyProfile(null))
      navigate('/login')
    } catch (error) {
      console.log("ERROR",error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="w-[20%]">
      <div id="parent-div" >
        <div id="image-div">
          <img
            className="ml-4"
            width={"24px"}
            src="https://i.pinimg.com/originals/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg"
            alt="twitte-logo"
          />
        </div>
        <div id="options-div" className="my-4">
          <Link
            to={"/"}
            className="flex items-center my-2 px-4 py-2 rounded-full
           hover:bg-gray-200 hover:cursor-pointer "
          >
            <div>
              <CiHome size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </Link>
          <div
            className="flex items-center my-2 px-4 py-2 rounded-full
           hover:bg-gray-200 hover:cursor-pointer"
          >
            <div>
              <CiHashtag size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div
            className="flex items-center my-2 px-4 py-2 rounded-full
           hover:bg-gray-200 hover:cursor-pointer"
          >
            <div>
              <IoIosNotificationsOutline size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>
          <Link
            to={`/profile/${user?._id}`}
            className="flex items-center my-2 px-4 py-2 rounded-full
           hover:bg-gray-200 hover:cursor-pointer"
          >
            <div>
              <CiUser size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>
          <div
            className="flex items-center my-2 px-4 py-2 rounded-full
           hover:bg-gray-200 hover:cursor-pointer"
          >
            <div>
              <CiBookmark size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <div
            className="flex items-center my-2 px-4 py-2 rounded-full
           hover:bg-gray-200 hover:cursor-pointer"
           onClick={logoutHandler}
          >
            <div>
              <IoIosLogOut size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
          <button
            className="px-4 py-2 border-none text-md bg-[#1D9BF0] 
          w-full rounded-full text-white font-bold "
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
