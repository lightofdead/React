import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post1/Post'


const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likeCounts={post.likeCounts}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return <div className={s.postsBlog}>
        <div>
            <div> My posts</div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts;