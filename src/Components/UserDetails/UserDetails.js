import React from "react";
import DeleteUser from "../DeleteUser/DeleteUser";
import styled from "styled-components";
import fakeUserData from "../../api/api";
import { useDispatch } from "react-redux";
import { addUsers } from "../../toolkit/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
// import VIcon1 from "../../assets/Images/Icons/Group1RoundedSolid.svg";
// import VIcon2 from "../../assets/Images/Icons/Group1RoundeOut.svg";
const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUsers = (payload) => {
    console.log("payload -->", payload);
    dispatch(addUsers(payload));
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of Details</div>
          <button
            onClick={() => {
              addNewUsers(fakeUserData());
            }}
            className="btn add-btn"
          >
            Add New User
          </button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteUser />
      </div>
    </Wrapper>
  );
};

export default UserDetails;
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
