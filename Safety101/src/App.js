import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Matrix from "./Assets/matrix.mp4";
import Switch from "./Assets/switch.jpg";
import AudioServer from "./Assets/audio-server.jpg";
import "./App.css";

function App() {
  // This line will eventually be its own element. But this is how I am able to display the video
  const Video = () => 
        (<video className="vidplaying" autoPlay muted playbackRate="0.1" loop disablePictureInPicture preload="auto" id="matrix" controlsList="nodownload">
          <source src={Matrix} type="video/mp4" />
          <source src={Matrix} type="video/ogg" />
           Your browswer does not support the Video tag
      </video>)
  ;

  const [vid, updateVid] = useState([Video()]);

  return (
    <div className="App">
      {/* Full Screen, responsive video playing */}
      <Video />
      {/* Begin text content on the screen */}
      <header>
      <nav className="social_media">
      <ul>
        <Link to="">Facebook</Link>
        <Link to="">Twitter</Link>
      </ul>
      
      </nav>
      <nav  className="main_nav">
        <img id="logo"  src={Switch}/>
      <ul>
        <NavLink             
        className="navbar-item"
        activeClassName="is-active"
        to="/"
        >
        Home
        </NavLink>
        <NavLink to="">About Us</NavLink>
        <NavLink to="">More Information</NavLink>
      </ul>
      </nav>
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
