import React, { useState, useEffect } from 'react';
import { LoadingDiv, Comment } from '.';
import { fetchPostComments } from '../functions/apiCalls';

export default function PostDetails(props) {

  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    fetchPostComments(props.post.id)
      .then(c => setComments(c));
  },[]);

  const renderComments = () => {
    return (
      comments.map((c,i) => <Comment key={`comment-${i}`} comment={c} />)
    )
  }


  return (
    <div className="post-details">
      <div className="post-details-title">{props.post.title}</div>
      <div className="post-details-body">{props.post.body}</div>
      <div className="post-details-comments">
        { comments.length > 0 ? 
          renderComments()
          :
          <LoadingDiv />
        }
      </div>
    </div>
  )
}

PostDetails.defaultProps = {
  post: {
    body: "Here's the body of a post",
    id: 0,
    title: "POOOOOOOOST",
    userId: 1,
  }
}
// post
// body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   id: 1,
//   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   userId: 1,

