import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todoSelector,
  clearTodos,
  restoreTodo,
} from "../../toolkit/slices/todos";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(todoSelector.selectEntities);
  const todoCount = useSelector(todoSelector.selectTotal);
  const deletedTodosList = useSelector((state) => state.todos.deletedTodos);
  const todoList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];

      todoList.push(
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          item={todoItem.item}
          completed={todoItem.completed}
        />
      );
    }
  }
  const restoreItem = (todo) => {
    dispatch(restoreTodo(todo));
  };
  const deletedList = deletedTodosList.map((todo) => (
    <div className="deleted-todo" key={todo.id}>
      <span>{todo.item}</span>
      <button onClick={() => restoreItem(todo)}>Restore</button>
    </div>
  ));
  return (
    <div className="todo-list">
      <h3>My Todo</h3>
      <h4>Count:{todoCount}</h4>

      <button
        onClick={() => {
          dispatch(clearTodos());
        }}
        className="delete-btn"
      >
        Clear All
      </button>
      <div>{todoList}</div>

      <h3>Deleted:</h3>
      <div>{deletedList}</div>
    </div>
  );
};

export default TodoList;
