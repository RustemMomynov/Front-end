import { NavLink } from "react-router-dom"
import c from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={c.dialog}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
    return <div className={c.message}>{props.message}</div>
}

const Dialogs = () => {
   
    let dialogsData = [
        {id: 1, name: "Connor"},
        {id: 2, name: "Markus"},
        {id: 3, name: "kara"},
        {id: 4, name: "Geralt"},
        {id: 5, name: "Regis"},
        {id: 6, name: "Dettlaff"}
    ]

    let messagesData = [
        {id: 0, message: "Hello my name is Connor"},
        {id: 1, message: "FREEDOM!!!!!!!!!"},
        {id: 2, message: "Give me your money"},
        {id: 3, message: "Not Geralt, Geralt"},
        {id: 4, message: "HeHeHe"},
        {id: 5, message: "If you believe in gods, start praying now"}
    ]
    

    return (
    <div className={c.dialogs}>
        <div className={c.dialogs__item}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />           
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            
        </div>
    <div className={c.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
        <Message message={messagesData[5].message} />
    </div>
    </div>
    
 )
}

export default Dialogs