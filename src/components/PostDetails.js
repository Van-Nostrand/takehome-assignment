import React, { useState, useEffect } from 'react';
import { LoadingDiv, Comment } from '.';
import { fetchPostComments } from '../functions/apiCalls';


// unused
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


