import MyPosts from "./MyPosts/MyPosts"
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {

    return (
        <div className={c.profile_component}>
        <ProfileInfo />
        <MyPosts postData={props.state.postData} />    
      </div>
    )
}

export default Profile