import React from "react";


function Post(props) {
    return(
       <div className="card">
            <div className="head-tag">
                <div className="head"> 
                    <p><b>{props.name}</b></p>
                    <p>{props.location}</p>
                </div>
                <div className="icon">
                    <img src="https://img.icons8.com/small/2x/more.png" alt="icon" />
                </div>
            </div>
            <img className="content-image" src={props.image} alt="post-img" />
            <div className="sub-bottom">
                <img src="https://img.icons8.com/ios/2x/like.png" alt="icon" />
                <img src="https://cdn-icons-png.flaticon.com/128/126/126536.png" alt="icon" />
                <span className="current-date">{props.date}</span>
            </div>
            <div className="likes">{props.like} likes</div>
            <div className="description"><b>{props.description}</b></div>        
       </div> 
    );
}
export default Post;