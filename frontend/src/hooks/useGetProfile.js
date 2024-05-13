import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";
const useGetProfile = (id) => {
  const dispath = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}profile/${id}`, {
          withCredentials: true,
        });
        dispath(getMyProfile(res.data.user));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
};

export default useGetProfile;
