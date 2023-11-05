import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";
import axios from "axios";

const DataProvider = ({ children }) => {
  const [data, setData] = useState(
    {
        "text": "",
        "likes": "",
        "retweet": "",
        "commentsTotal": "",
        "tweetDate": "",
        "userTweetResponse": {
          "firstName": "",
          "lastName": "",
          "profilePicture": "",
          "userName": ""
        }
      }
  );

  useEffect(() => {
    axios.get("http://localhost:9000/tweet/7")
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;