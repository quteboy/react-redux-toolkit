import React, { useEffect } from "react";
import DeleteUser from "../DeleteUser/DeleteUser";
import styled from "styled-components";
import fakeUserData from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../toolkit/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
import { fetchPosts } from "../../toolkit/slices/postsSlice";
// import VIcon1 from "../../assets/Images/Icons/Group1RoundedSolid.svg";
// import VIcon2 from "../../assets/Images/Icons/Group1RoundeOut.svg";
const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUsers = (payload) => {
    dispatch(addUsers(payload));
  };
  const posts = useSelector((state) => {
    return state.posts.posts;
  });
  const status = useSelector((state) => {
    return state.status;
  });
  const error = useSelector((state) => {
    return state.error;
  });
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }
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
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
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
