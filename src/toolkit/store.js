import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import postsSlice from "./slices/postsSlice";
import todoSlice from "./slices/todoSlice";
import albumSlice from "./slices/albumSlice";
import photoSlice from "./slices/photoSlice";
import addressSlice from "./slices/addressSlice";
const store = configureStore({
  reducer: {
    users: userSlice,
    todos: todoSlice,
    posts: postsSlice,
    albums: albumSlice,
    photos: photoSlice,
    address: addressSlice,
  },
});
export default store;
