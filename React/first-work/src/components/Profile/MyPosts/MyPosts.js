import c from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    return (
      <div>
         My posts 
            <div>
              
              <textarea name="" id="" cols="30" rows="3"></textarea>
              <br/>
              <button>Add post</button>
            </div>
            <div>
             <Post message="Hello it &apos s me mario" avatar="https://assets.codepen.io/153642/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512" />
             <Post />
            </div>
        </div>
    
    )
}

export default MyPosts