import React from 'react';
import { Post } from '../components';

export default function Wall(props) {

  let wallPosts;
  if (props.posts.length > 0) {
    console.log("iterating over posts")
    wallPosts = props.posts.map((p, i) => (
      <Post 
        key={`post-${i}`} 
        post={p}
        selectPost={props.selectPost}
      />
    ))
  }

  return (
    <div className="wall">
      <ul>
        {wallPosts}
      </ul>
    </div>
  )
}
