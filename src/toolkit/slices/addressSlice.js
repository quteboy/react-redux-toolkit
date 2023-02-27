import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAddress = createAsyncThunk("fetchAddress", async () => {
  const result = await fetch(
    "https://fakerapi.it/api/v1/addresses?_quantity=50&_locale=en_US"
  );
  return result.json();
});

const addressSlice = createSlice({
  name: "address",
  initialState: {
    dataAddress: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataAddress = action.payload;
    });
    builder.addCase(getAddress.rejected, (state, action) => {
      state.isError = true;
      console.log("Error is Here", state.isError);
    });
  },
});
export default addressSlice.reducer;
