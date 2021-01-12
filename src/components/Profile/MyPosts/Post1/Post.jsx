import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img
            src='https://sun9-54.userapi.com/impf/OWKP8wJMBx2sRjLuCacWcgVOu9jHmjTcASYzjA/juxfeh3XOZ0.jpg?size=225x225&quality=96&proxy=1&sign=0836a5093e180d9b1ada636a81319d0f&type=album '/>
        {props.message}
        <div>
            <span>like {props.likeCounts}</span>
            <span> share </span>
            <span> dislike</span>
        </div>
    </div>


}
export default Post;