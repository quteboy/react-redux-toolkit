import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhotos } from "../../toolkit/slices/photoSlice";
const Photos = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("Photos -->", state.photos.data);
  if (state.photos.isLoading) {
    return <div>Loading....</div>;
  }
  const fetchPhotos = () => {
    dispatch(getAllPhotos());
  };
  return (
    <React.Fragment>
      <div>
        <button onClick={fetchPhotos}>Fetch Me</button>
        {state.photos.data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.url} alt={item.title} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Photos;
