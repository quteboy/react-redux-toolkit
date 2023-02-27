import React from "react";
import { getAddress } from "../../toolkit/slices/addressSlice";
import { useSelector, useDispatch } from "react-redux";
const Address = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const newData = state.address.dataAddress;

  if (state.address.isLoading) {
    return <div>Loading....</div>;
  }
  const getAddresClick = () => {
    dispatch(getAddress());
  };
  return (
    <React.Fragment>
      <button onClick={getAddresClick}>CLick me</button>
      {newData.data.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.street + " - " + item.streetName}</div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Address;
