import React from "react";
import "./instaPost.css";
import Header from "./components/Header";

export default function Post() {
  const redirectURL =
    window.location.href.substring(0, window.location.href.length - 5) +
    "";
  console.log(redirectURL);
  return (
    <>
      <Header />
      <form
        action="https://instaclone-backend01.herokuapp.com/Post"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="body">
          <div className="Post">
            <input type="file" id="image-upload" name="image" required />
            <div className="content">
              <input
                className="name"
                type="text"
                name="author"
                placeholder="Author"
                required
              />
              <input
                className="location"
                type="text"
                name="location"
                placeholder="Location"
                required
              />
            </div>
            <input
              className="description-content"
              type="text"
              name="description"
              placeholder="Description"
            />
            <input
              type="text"
              name="redirectURL"
              value={redirectURL}
              style={{ display: "none" }}
            />
            <button className="post" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
