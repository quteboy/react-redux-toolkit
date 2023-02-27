import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const todoAdapter = createEntityAdapter();
export const todoSelector = todoAdapter.getSelectors((state) => state.todos);
const todoAppSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState({
    deletedTodos: [],
  }),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo(state, action) {
      state.deletedTodos.push(state.entities[action.payload]);
      todoAdapter.removeOne(state, action);
    },
    clearTodos: todoAdapter.removeAll,
    updateTodo: todoAdapter.updateOne,
    restoreTodo(state, action) {
      todoAdapter.addOne(state, action);
      state.deletedTodos = state.deletedTodos.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default todoAppSlice.reducer;
export const {
  addTodo,
  addTodos,
  deleteTodo,
  deleteTodos,
  clearTodos,
  updateTodo,
  restoreTodo,
} = todoAppSlice.actions;
