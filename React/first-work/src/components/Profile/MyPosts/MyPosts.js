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
             <Post message="Hello it's me mario" avatar="https://assets.codepen.io/153642/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512"  likesCount="1"/>
             <Post message="Я чо похож на абонента?" avatar="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP4507-NPEB02124_00-AVVIRTUALB000025/image?_version=00_09_000&platform=chihiro&w=960&h=960&bg_color=000000&opacity=100"  likesCount="134"/>
            </div>
        </div>
    
    )
}

export default MyPosts