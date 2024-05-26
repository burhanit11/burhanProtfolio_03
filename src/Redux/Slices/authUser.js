import { createSlice } from "@reduxjs/toolkit";

const authUser = createSlice({
  name: "auth-user",
  initialState: null,
  reducers: {
    authLogin(state, action) {
      return { ...action.payload };
    },
    authLogout() {
      return null;
    },
  },
});

export const { authLogin, authLogout } = authUser.actions;

export default authUser.reducer;
