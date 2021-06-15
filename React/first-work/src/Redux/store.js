import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Connor" },
        { id: 2, name: "Markus" },
        { id: 3, name: "Kara" },
        { id: 4, name: "Geralt" },
        { id: 5, name: "Regis" },
        { id: 6, name: "Dettlaff" },
      ],

      messages: [
        { id: 0, message: "Hello my name is Connor" },
        { id: 1, message: "FREEDOM!!!" },
        { id: 2, message: "Give me your money" },
        { id: 3, message: "Not Geralt, Geralt" },
        { id: 4, message: "Hehe" },
        {
          id: 5,
          message: "If you acknowledge any gods... start praying, now!",
        },
      ],

      newMessageBody: "",
    },

    profilePage: {
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
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  callSubscriber() {
    console.log("Данные изменились дон");
  },

  _addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      avatar: "/assets/img/MyAvatar.jpg",
      likesCount: 0,
    };

    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this.callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.callSubscriber(this._state);
  },

  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.messagesPage = DialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = SidebarReducer(this._state.sidebar, action);

    this.callSubscriber(this._state);
  },

  subscribe(observer) {
    this.callSubscriber = observer;
  },
};

export default store;

window.store = store;
