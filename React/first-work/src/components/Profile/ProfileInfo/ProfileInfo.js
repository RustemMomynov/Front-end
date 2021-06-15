import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  function getRandomLink() {
    let link = [
      "/assets/img/4skeleton.gif",
      "/assets/img/skeletonAtack.gif",
      "/assets/img/skeletonDansen.gif",
      "/assets/img/skeletonDansen2.gif",
    ];

    return link[Math.floor(Math.random() * link.length)];
  }

  return (
    <div>
      <div className={c.menu}>
        <img
          src={getRandomLink()}
          alt=""
          srcset=""
          width="1300px"
          height="255px"
        />
        <div className={c.avatar}>
          <img
            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/NL/nl/999/EP4396-CUSA10659_00-AV00000000000123/1602750988000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
            width="200"
            alt=""
            srcset=""
          />
        </div>
        <div className={c.name}>
          Mefisto{" "}
          <img
            src="https://www.pngkey.com/png/full/353-3534978_vector-bien-orange-check-mark-png.png"
            width="40px"
            alt=""
            srcset=""
          />
        </div>
        <div className={c.static}>
          <span>
            Friends
            <div>85</div>
          </span>
          <span>
            Subscriber
            <div>22</div>
          </span>
          <span>
            Music
            <div>23</div>
          </span>
        </div>
      </div>
      <div className={c.discription__block}></div>
    </div>
  );
};

export default ProfileInfo;
