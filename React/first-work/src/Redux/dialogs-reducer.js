const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const DialogsReducer = (state = initialState, action) => {
  // initial state значение которое дано на случай если стэйт окажется underfined
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 7, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default DialogsReducer;
