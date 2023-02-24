import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUsers } from "../../toolkit/slices/UserSlice";
import { useDispatch } from "react-redux";
const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  const deleteUser = (index) => {
    dispatch(removeUsers(index));
  };
  return (
    <Wrapper>
      {data.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "5px 0px",
            }}
          >
            <li key={index}>{item}</li>
            <button
              onClick={() => {
                deleteUser(index);
              }}
              className="delete-btn"
            >
              <MdDeleteForever className="delete-icon" />
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default DisplayUsers;
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
