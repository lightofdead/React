import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) =>
{
    return(

        <div className={s.item + ' ' + s.active}>
            <img src=" https://a.wattpad.com/cover/203561079-256-k352390.jpg"/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )

}

export default Dialog;
