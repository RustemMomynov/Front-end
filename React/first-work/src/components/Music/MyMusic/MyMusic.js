import c from "./MyMusic.module.css";

const MyMusic = (props) => {
  // debugger;

  let musicElement = props.posts.map((p) => (
    <div className={c.music}>
      <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} />
    </div>
  ));

  return <div className={c.music__container}> MUSIC</div>;
};

export default Music;
