import React from "react";
import styled from "styled-components";
import { clearAllUser } from "../../toolkit/actions/actions";
import { useDispatch } from "react-redux";
const DeleteUser = () => {
  const dispatch = useDispatch();
  const deleteAllUsers = () => {
    dispatch(clearAllUser());
  };
  return (
    <React.Fragment>
      <Wrapper>
        <button
          onClick={() => {
            deleteAllUsers();
          }}
          className="btn delete-btn"
        >
          Delete User
        </button>
      </Wrapper>
    </React.Fragment>
  );
};

export default DeleteUser;
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
    margin-top: 10px;
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
