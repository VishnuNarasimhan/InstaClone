import React, { useEffect, useState } from "react";
import "./Postview.css";
import Header from "./components/Header";
import Post from "./components/Post";
import axios from "axios";

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const currentDate = new Date();
// const date =
//   currentDate.getDate() +
//   " " +
//   months[currentDate.getMonth()] +
//   " " +
//   currentDate.getFullYear();

const date = new Date().toLocaleDateString();
let actualDate = "" + date;

const Postview = () => {
  const [data, usedata] = useState([]);


  useEffect(() => {
    axios
      .get("https://instaclone-backend01.herokuapp.com/")
      .then((res) => {
        usedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="site-container">
      <Header />
      {data.map((content, index) => {
        return (
          <Post
            key={index}
            name={content.author}
            location={content.location}
            // like={content.likes}
            description={content.description}
            image={content.avatar}
            date={actualDate}
          />
        );
      })}
    </div>
  );
};

export default Postview;
