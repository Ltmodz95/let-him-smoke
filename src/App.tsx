import React, { useState } from 'react';
import './App.scss';
import cryingWeed from './assets/videos/cryingWeed.mp4';

function App() {

  const getCount = () =>{
    let count_value = 0
    let cookies = document.cookie.split(';')
    for( let i =0;i<cookies.length; i++)
    {
      const [key,value] = cookies[i].split('=');
      if (key === 'count')
      {
        count_value = parseInt(value)
      }
    }
    return count_value;
  }

  const [count, setCount] = useState(getCount());

  const handleSmoking = (e:any) => {
    let video = document.getElementById('vid') as HTMLVideoElement
    video.currentTime = 0;
    let date = new Date();
    date.setTime(date.getTime() + (1000*24*60*60*1000));
    setCount(count+1)
    document.cookie = `count=${count+1};expires=${date.toUTCString()};path=/`
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
