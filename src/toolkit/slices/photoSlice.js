import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPhotos = createAsyncThunk("fetchPhotos", async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
  return resp.json();
});

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPhotos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPhotos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllPhotos.rejected, (state, action) => {
      state.isError = true;
      console.log("Error Message is Here -->", state.isError);
    });
  },
});
export default photoSlice.reducer;
