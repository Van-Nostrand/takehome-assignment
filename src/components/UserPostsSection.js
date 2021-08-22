import React from 'react';
import { LoadingDiv, Post } from '.';


export default function UserPostsSection(props) {

  const renderPosts = () => {
    return props.posts.map(post => <Post key={`userpost-${post.id}`} post={post} />);
  }
  
  return (
    <div className="user-details-posts">
      <h2 className="user-details-posts-title">
        {`Posts by ${props.name}`}
      </h2>
      <ul className="user-details-posts-list">
        { props.posts.length > 0 ? 
          renderPosts()
          : 
          <LoadingDiv /> 
        }
      </ul>
    </div>
  )
}
