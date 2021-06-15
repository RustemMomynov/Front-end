import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  debugger;
  return (
    <div className={c.profile_component}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
