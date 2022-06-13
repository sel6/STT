import React from "react";
import classes from "./Home.module.css";

export const Home = () => {
  return (
 
    <div className={classes.content}>
      <h2 className={classes.a}> Speech to text</h2>
      <p className={classes.para2}>
        Speech recognition technology allows for hands-free control of
        smartphones, speakers, and even vehicles in a wide variety of languages.{" "}
      </p>
      <video className={classes.videobackground} loop muted autoPlay>
        <source src={process.env.PUBLIC_URL + "/img/AudioWave.mp4"} type="video/mp4"></source>
      </video>
      <p className={classes.para2}>

        The speech reconginition model we devloped will use an audio with .wav
        format and predicted its correct text format.
      </p>
      <br></br>

      <p>For the following audio file we can predict the coresponding text</p>

      <audio controls>
          <source src={process.env.PUBLIC_URL + "/img/tr_1_tr01001.wav"} type="audio/wav"></source>
      </audio>

      
      <p className={classes.para2}>
        <img src={process.env.PUBLIC_URL + "/img/11.PNG"} alt="audio" />{" "}
        <br></br>
        This shows us the differnt frequency amplitudes the sound of the audio
    </p>
      <br></br>
      <p className={classes.para6}>The Transcription of the sound</p>
      <br></br>
      <p className={classes.para7}>ያንደኛ ደረጃ ትምህርታቸው ን ጐንደር ተ ም ረዋል</p>
    </div>
  );
};
