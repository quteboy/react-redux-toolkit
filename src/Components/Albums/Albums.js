import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbum } from "../../toolkit/slices/albumSlice";
const Albums = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("State -->", state.albums.data);

  if ((state.albums.isLoading)) {
    return <div>Loading....</div>;
  }
  const getAll = () => {
    dispatch(getAlbum());
  };
  
  return (
    <div>
      <button onClick={getAll}> Fetch Me</button>
      <ul>
        {state.albums.data.map((curEl) => {
          return <li key={curEl.id}>{curEl.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Albums;
