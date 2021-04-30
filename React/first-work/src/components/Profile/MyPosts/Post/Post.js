import c from "./Post.module.css"

const Post = (props) => {
    return (
      <div>
             <div className={c.item}>
               <img src={props.avatar} alt="" srcset=""/>
               <span className={c.data}></span>
               
                 {props.message}
                 
                 <div><span className={c.like}>{props.likesCount}</span> like</div>
               
              </div>
        </div>
    
    )
}

export default Post