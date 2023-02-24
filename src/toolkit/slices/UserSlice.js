import { createSlice } from "@reduxjs/toolkit";
import { clearAllUser } from "../actions/actions";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
      console.log("action.payload -->", action.payload);
    },
    removeUsers(state, action) {
      state.splice(action.payload, 1);
    },
    /* deleteUsers(state, action) {
      return [];
    }, */
  },
  extraReducers(builder) {
    builder.addCase(clearAllUser, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUsers, removeUsers, clearAllUserType } = userSlice.actions;
