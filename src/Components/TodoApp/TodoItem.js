import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../toolkit/slices/todos";
const TodoItem = ({ item, completed, id }) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(updateTodo({ id: id, changes: { completed: !completed } }));
  };
  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <React.Fragment>
      <div className="todo">
        <input onChange={toggle} type="checkbox" value={completed} id={id} />
        <span>{item}</span>
        <button onClick={deleteItem}>X</button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
