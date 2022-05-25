import React from 'react';
import './landing.css';
import {Link} from "react-router-dom";

export default function Landingpage() {
  return (
    <div className='main'>
     <div className='landing-img'>
       <img src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1366919.jpg&fm=jpg" alt ="landing-img" width="400px" height="600px"/>
     </div>
      <div className='landing-h1'>
        <h1>Instaclone</h1>
        <Link to="/Postview"><button className='button'>Enter</button></Link>
      </div>
    </div>
  );
}
