import s from './MyPosts.module.css'
import Post from './Post1/Post'



const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message = {post.message} likeCounts = {post.likeCounts}/>)

    return <div className = {s.postsBlog}>
        <div>
            <div> My posts</div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className = {s.posts}>
            {postsElements}
       </div>
       </div>
  
}
export default MyPosts;