const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
          avatar:
            "https://assets.codepen.io/153642/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512",
          likesCount: 1,
        },
        {
          id: 1,
          message: "Я чо похож на абонента?",
          avatar:
            "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP4507-NPEB02124_00-AVVIRTUALB000025/image?_version=00_09_000&platform=chihiro&w=960&h=960&bg_color=000000&opacity=100",
          likesCount: 134,
        },
      ],

      newPostText: "",
    },
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
      avatar:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/NL/nl/999/EP4396-CUSA10659_00-AV00000000000123/1602750988000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
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
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this.callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = "";
      this._state.messagesPage.messages.push({ id: 6, message: body });
      this.callSubscriber(this._state);
    }
  },

  subscribe(observer) {
    this.callSubscriber = observer;
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default store;

window.store = store;
