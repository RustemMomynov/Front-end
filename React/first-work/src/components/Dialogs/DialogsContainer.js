import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import AudioClick from "../../AudioClick/AudioClick";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return (
          <Dialogs
            messagesPage={state}
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

let DialogsContainer2 = connect()(); // когда ставятся двойные скобки значит мы вызываем фукцию которую вызовет первая функция
