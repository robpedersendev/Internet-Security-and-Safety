import React from "react";
import Matrix from "./Assets/matrix.mp4";
import "./App.css";

function App() {
  // This line will eventually be its own element. But this is how I am able to display the video
  const Video = () => 
        (<video autoPlay muted loop disablePictureInPicture preload="auto" id="matrix" controlsList="nodownload">
          <source src={Matrix} type="video/mp4" />
          <source src={Matrix} type="video/ogg" />
           Your browswer does not support the Video tag
      </video>)
  ;
  return (
    <div className="App">
      {/* Full Screen, responsive video playing */}
      <Video />
      {/* Begin text content on the screen */}
      <header>

      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
