import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../Redux/state";

const MyPosts = (props) => {
  let postElement = props.postData.map((p) => (
    <div className={c.posti}>
      <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} />
    </div>
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={c.postsBlock}>
      <span className={c.heading}> My posts </span>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          name=""
          id=""
          cols="30"
          rows="3"
          value={props.newPostText}
        />
        <br />
        <button onClick={addPost}>Add post</button>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
