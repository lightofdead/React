import s from "./Message.module.css";

const Message = (props) =>{
    return(
        <div className={s.item}>{props.text}</div>
    )
}
export default Message;