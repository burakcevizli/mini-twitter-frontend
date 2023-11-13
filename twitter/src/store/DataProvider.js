import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const DataProvider = ({ children }) => {
  const [data1, setData1] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [commentTweetId, setCommentTweetId] = useState(0);

  //BELKİ GEREK OLUR DIYE KALSIN...
  // useEffect(() => {
  //   axios.get(`http://localhost:9000/tweet/profile/`)
  //     .then((response) => {
  //       setData1(response.data)
  //     })
  // }, [])

  const [allTweets, setAllTweets] = useState([]);

  return (
    <DataContext.Provider value={{ data1, setData1, loggedInUser, setLoggedInUser, allTweets, setAllTweets,commentTweetId, setCommentTweetId }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;