import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodo } from "../../toolkit/slices/todoSlice";
import styled from "styled-components";
const Todos = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.todos.isLoading) {
    return <div>Loding...</div>;
  }
  return (
    <React.Fragment>
      <Wrapper>
        <div className="content">
          <button
            className="btn "
            onClick={() => {
              dispatch(getAllTodo());
            }}
          >
            Fetch Todo
          </button>
          <ul>
            {state.todos.data.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Todos;
const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
