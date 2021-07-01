import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().messagesPage;

//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         let onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };

//         return (
//           <Dialogs
//             messagesPage={state}
//             sendMessage={onSendMessageClick}
//             updateNewMessageBody={onNewMessageChange}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

// export default DialogsContainer;

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },

    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
