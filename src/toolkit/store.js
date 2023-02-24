import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import postsSlice from "./slices/postsSlice";
import todoSlice from "./slices/todoSlice";
const store = configureStore({
  reducer: {
    users: userSlice,
    todos:todoSlice,
    posts: postsSlice,
  },
});
export default store;
