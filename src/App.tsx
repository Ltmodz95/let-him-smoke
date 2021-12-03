import React, { useState } from 'react';
import './App.scss';
import cryingWeed from './assets/videos/cryingWeed.mp4';

function App() {
  const [count, setCount] = useState(0)
  const handleSmoking = (e:any) => {
    let video = document.getElementById('vid') as HTMLVideoElement
    video.currentTime = 0;
    setCount(count+1)
    video.play();
  }
  return (
    <div className="home-container">
      <div className="counter">
        <h1>LET HIM SMOKE</h1>
        <h2>{count > 0 ? count : ''}</h2>
      </div>
      <div className="video-container">
      <video id="vid" autoPlay className="video-element" src={cryingWeed}></video>
      </div>
      <div  onClick={handleSmoking} className="mouth"></div>
    </div>
  );
}

export default App;
