import React from 'react';
import { LoadingDiv, Post } from '.';

// renders all of a users posts in the user details component
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
        { props.posts === null ? 
          <div>this user has not created any posts</div>
          :
            props.posts.length > 0 ? 
            renderPosts()
            : 
            <LoadingDiv /> 
        }
      </ul>
    </div>
  )
}
