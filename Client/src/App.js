import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landingpage from './components/Landingpage';
import Postview from './Postview';
import Post from './Post';
 
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Postview" element={<Postview />} />
          <Route path="/Postview/Post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 

