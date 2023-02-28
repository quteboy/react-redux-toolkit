import React, { useState, useEffect } from "react";
import APICall from "../Utility/APICall";
import moment from "moment";
const JSPrac = () => {
  const [books, setBooks] = useState([]);
  const [creditCard, setCreditCard] = useState([]);

  const getCreditCard = async () => {
    var apiURL =
      "https://fakerapi.it/api/v1/credit_cards?_quantity=20&_locale=en_US";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      Headers: myHeaders,
    };
    const results = await APICall(apiURL, requestOptions);
    const ccData = results.data;
    const shallowCcData = [...ccData];
    shallowCcData.sort((a, b) => a.owner > b.owner);
    console.log("shallowCcData -->", shallowCcData);
    setCreditCard(shallowCcData);
  };
  const getBooks = async () => {
    var URL = "https://fakerapi.it/api/v1/books?_quantity=10&_locale=en_US";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      Headers: myHeaders,
    };
    const resp = await APICall(URL, requestOptions);
    const data = resp.data;
    const shallowData = [...data];
    shallowData.sort((a, b) => a.title > b.title);
    setBooks(shallowData);
  };
  useEffect(() => {
    getBooks();
    getCreditCard();
  }, []);
  return (
    <div>
      {books.map((item) => {
        return (
          <div key={item.id}>
            <div
              style={{
                border: "1px solid black",
                padding: "7px 5px",
                marginBottom: "10px",
              }}
            >
              <div>{item.title}</div>
              <div>{item.published}</div>
              <div>
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={item.image}
                  alt={item.author}
                />
              </div>
            </div>
          </div>
        );
      })}
      {creditCard.map((ccItem, index) => {
        return (
          <div
            style={{
              border: "1px solid black",
              padding: "7px 5px",
              marginBottom: "10px",
            }}
            key={index}
          >
            <div>{ccItem.owner}</div>
            <div>{ccItem.expiration}</div>
            <div>{ccItem.number}</div>
            <div>{ccItem.type}</div>
          </div>
        );
      })}
    </div>
  );
};

export default JSPrac;
