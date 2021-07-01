import c from "./Header.module.css";

const Header = () => {
  const removeMusic = () => {
    const audioContainer = document.getElementById("audioContainer");
    const mainAudio = document.getElementById("mainAudio");
    audioContainer.style.display = "none";

    mainAudio.removeAttribute("autoplay");
  };

  return (
    <header className={c.header}>
      <div id="audioContainer" className={c.audio__container}>
        <div id="" className={c.audio__flex}>
          <audio id="mainAudio" className={c.audio} controls src=""></audio>
          <button onClick={removeMusic}>X</button>
        </div>
      </div>
      <span className={c.logotype}>
        <span className={c.logo}>Social</span>
        <span className={c.Hub}>club</span>
      </span>
    </header>
  );
};

export default Header;
