import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import postsSlice from "./slices/postsSlice";

import albumSlice from "./slices/albumSlice";
import photoSlice from "./slices/photoSlice";
import addressSlice from "./slices/addressSlice";
import todoAppSlice from "./slices/todos";
const store = configureStore({
  reducer: {
    users: userSlice,
    posts: postsSlice,
    albums: albumSlice,
    photos: photoSlice,
    address: addressSlice,
    todos: todoAppSlice,
  },
});
export default store;
