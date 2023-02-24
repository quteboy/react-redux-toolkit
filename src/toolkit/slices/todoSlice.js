import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Action to fetch API call thunk to use make delayed operation

export const getAllTodo = createAsyncThunk("fetchTodo", async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  return resp.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllTodo.rejected, (state, action) => {
      console.log("Error is Here", action.payload);
      state.isError = true;
    });
  },
});
export default todoSlice.reducer