import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import c from "./Dialogs.module.css"
import Message from "./Message/Message"




const Dialogs = (props) => {
debugger

    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )
    let messagesElements = props.state.messages.map( message => <Message message={message.message} /> )

    return (
    <div className={c.dialogs}>
         
          <DialogItem />
          <Message />
   
        <div className={c.dialogs__item}>
         {dialogsElements}
        </div>
    <div className={c.messages}>
         {messagesElements}
    </div>
    </div>
    
 )
}

export default Dialogs