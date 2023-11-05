import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";
import axios from "axios";

const DataProvider = ({ children }) => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/tweet/")
      .then((response) => {
        setData1(response.data)
      })
  }, [])

  return (
    <DataContext.Provider value={{ data1, setData1 }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;