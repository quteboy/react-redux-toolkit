import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAlbum = createAsyncThunk("fetchAlbum", async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/albums");
  return resp.json();
});

const albumSlice = createSlice({
  name: "album",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAlbum.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAlbum.rejected, (state, action) => {
      console.log("Error is Here", action.payload);
      state.isError = true;
    });
  },
});
export default albumSlice.reducer;
