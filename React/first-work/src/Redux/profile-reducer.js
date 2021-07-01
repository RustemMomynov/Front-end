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
      message: "lorem",
      avatar: "/assets/img/skeletonAvatar.jpg",
      likesCount: 134,
    },
  ],

  newPostText: "",
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        postData: [
          ...state.postData,
          {
            id: 3,
            message: state.newPostText,
            avatar: "/assets/img/MyAvatar.jpg",
            likesCount: 0,
          },
        ],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
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
