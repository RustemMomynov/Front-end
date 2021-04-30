import c from "./Post.module.css"

const Post = (props) => {
    return (
      <div>
             <div className={c.item}>
               <img src={props.avatar} alt="" srcset=""/>
               <span className={c.data}></span>
               <span>
                 {props.message}
                 </span>
                 <div><span>{props.likesCount}</span> like</div>
               
              </div>
        </div>
    
    )
}

export default Post