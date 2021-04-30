import c from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/640x320/landscape-1497533116-not-dead.gif?resize=640:*" width="1300" height="255" alt=""/>
        </div>
        <div className={c.discription__block}>ava + discription</div>
      </div>
    );
}

export default ProfileInfo