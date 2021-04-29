import MyPosts from "./MyPosts/MyPosts"
import c from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={c.profile_component}>
        <div>
        <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/640x320/landscape-1497533116-not-dead.gif?resize=640:*" width="1300" height="255" alt=""/>
        </div>
        <div>
          ava + discription
        </div>   
        <MyPosts />    
      </div>
    )
}

export default Profile