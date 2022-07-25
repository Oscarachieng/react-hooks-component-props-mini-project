import React from "./Article";

const Article = ({title , date = "January 1, 1970", preview, } ) => {
   //destructuring the post
//    const {title , date = "January 1, 1997", preview, } = post;
    return (
     <article>
         <h3>{title}</h3>
         <small>{date}</small>
         <p>{preview}</p>
     </article>
    )
}
export default Article;