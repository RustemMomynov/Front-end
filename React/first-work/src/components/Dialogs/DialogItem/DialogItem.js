import { NavLink } from "react-router-dom"
import c from "./../Dialogs.module.css"

const DialogItem = (props) => { 
    let path = "/dialogs/" + props.id

    return <div className={c.dialog}>
    <NavLink to={path}>{props.name}</NavLink> 
</div>
}

export default DialogItem