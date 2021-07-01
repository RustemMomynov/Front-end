import c from "./Music.module.css";
import store from "./../../../Redux/redux-store";

const Music = (props) => {
  var audioContainer = document.getElementById("audioContainer");

  const changeAudioSRC = (event) => {
    let state = store.getState().music.musicData;
    const mainAudio = document.getElementById("mainAudio");
    audioContainer.style.display = "block";
    const MusicId = Number(event.target.id);
    switch (MusicId) {
      case 1:
        mainAudio.src = "/assets/audio/Кровосток - Куртец.mp3";
        break;
      case 2:
        mainAudio.src = "/assets/audio/GONE.Fludd – ПАЦАНЫ II.mp3";
        break;
      case 3:
        mainAudio.src = "/assets/audio/Oxxymiron – Город под подошвой.mp3";
        break;
    }
    mainAudio.setAttribute("autoplay", true);
  };

  return (
    <div>
      <div>
        <button id="1" onClick={changeAudioSRC}>
          Кровосток
        </button>
      </div>
      <div>
        <button id="2" onClick={changeAudioSRC}>
          GONE.Fludd
        </button>
      </div>
      <div>
        <button id="3" onClick={changeAudioSRC}>
          Oxxymiron
        </button>
      </div>
      <div>{/* <button onClick={changeAudioSRC}>Change</button> */}</div>
      <div>{/* <button onClick={changeAudioSRC}>Change</button> */}</div>
    </div>
  );
};

export default Music;
