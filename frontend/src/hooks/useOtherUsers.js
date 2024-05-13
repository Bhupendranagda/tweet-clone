import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";
const useOtherUsers = (id) => {
  const dispath = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}otheruser/${id}`, {
          withCredentials: true,
        });
        console.log("Hi", res);
        dispath(getOtherUsers(res.data.othersUsers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
};

export default useOtherUsers;
