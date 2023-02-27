import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodos } from "../../toolkit/slices/todos";
import { nanoid } from "@reduxjs/toolkit";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const handleSubmit = () => {
    if (todoName.length > 0) {
      //dispatch(addTodo({ id: nanoid(), todo: todoName, completed: false }));
      const items = todoName.split(",");
      // first method
      /* items.forEach((itm) => {
        dispatch(addTodo({ id: nanoid, todo: todoName, completed: false }));
      }); */
      // second method
      dispatch(
        addTodos(
          items.map((curEl) => ({
            id: nanoid(),
            item: curEl,
            completed: false,
          }))
        )
      );
    }
  };
  return (
    <React.Fragment>
      <div className="add-todo">
        <p>To add Multiple item write them comma separated </p>
        <p>
          <i>Eg: Eggs,Breads,Ham,Cheese</i>
        </p>
        <input type="text" value={todoName} onChange={handleTodoName} />
        <button onClick={handleSubmit}>Add</button>
      </div>
    </React.Fragment>
  );
};

export default AddTodo;
