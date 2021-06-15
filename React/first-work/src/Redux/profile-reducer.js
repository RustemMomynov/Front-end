const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    {
      id: 0,
      message: "Hello it's me mario",
      avatar: "/assets/img/marioAvatar.jpg",
      likesCount: 1,
    },
    {
      id: 1,
      message: "Я чо похож на абонента?",
      avatar: "/assets/img/skeletonAvatar.jpg",
      likesCount: 134,
    },
  ],

  newPostText: "",
};

const ProfileReducer = (state = initialState, action) => {
  // initial state значение которое дано на случай если стэйт окажется underfined

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        avatar: "/assets/img/MyAvatar.jpg",
        likesCount: 0,
      };

      state.postData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default ProfileReducer;
