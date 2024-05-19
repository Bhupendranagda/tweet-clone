import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
    profile: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    getMyProfile: (state, action) => {
      state.profile = action.payload;
    },
    followingUpdate:(state,action) => {
      if(state.user.following.includes(action.payload)){
        // unfollow
        state.user.following = state.user.following.filter((itemId) => {
          itemId!==action.payload
        } )
      }else{
        console.log("state",state.user.following)
        // follow
        state.user.following.push(action.payload)
      }
    }
  },
});

export const { getUser, getOtherUsers, getMyProfile,followingUpdate } = userSlice.actions;
export default userSlice.reducer;
