import { NavLink } from "react-router-dom"
import dialogsData from "../.."
import DialogItem from "./DialogItem/DialogItem"
import c from "./Dialogs.module.css"
import Message from "./Message/Message"
import messages from "./../../index"
import dialogsData from "./../../index"



const Dialogs = () => {



    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )
    let messagesElements = messages.map( message => <Message message={message.message} /> )


    return (
    <div className={c.dialogs}>
          {messages}
          {dialogsData}
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