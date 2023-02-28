import React, { useState, useCallback, useEffect } from "react";
import APICall from "../Utility/APICall";
const JSPrac2 = () => {
  const [person, setPerson] = useState([]);
  const getAllPersons = async () => {
    const apiURL =
      "https://fakerapi.it/api/v1/persons?_quantity=20&_locale=en_US";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      Headers: myHeaders,
    };
    const response = await APICall(apiURL, requestOptions);
    const _perData = response.data;
    const sortedData = [..._perData].sort((a, b) => a.birthday > b.birthday);
    const filteredData = [..._perData].filter(
      (item) => item.gender === "female"
    );
    setPerson(sortedData);
  };
  useEffect(() => {
    getAllPersons();
  }, []);
  return (
    <React.Fragment>
      <div className="cardContainer">
        {person.map((item, index) => {
          return (
            <div key={index} className="cardItem">
              <div>{item.firstname + " " + item.lastname}</div>
              <br />
              <div>{item.gender}</div>
              <br />
              <div>{item.birthday}</div>
              <img style={{width:'200px'}} src={item.image} alt={item.firstname} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default JSPrac2;
