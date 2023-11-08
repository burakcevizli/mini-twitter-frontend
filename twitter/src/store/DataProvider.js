import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const DataProvider = ({ children }) => {
  const [data1, setData1] = useState([]);
  const [loggedInUser , setLoggedInUser] = useState("");

//BELKİ GEREK OLUR DIYE KALSIN...
  // useEffect(() => {
  //   axios.get(`http://localhost:9000/tweet/profile/`)
  //     .then((response) => {
  //       setData1(response.data)
  //     })
  // }, [])

  return (
    <DataContext.Provider value={{ data1, setData1 , loggedInUser ,setLoggedInUser }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;