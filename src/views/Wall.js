import React from 'react';
import { Post } from '../components';

export default function Wall(props) {


  let wallPosts;
  if (props.posts.length > 0) {
    wallPosts = props.posts.map((p, i) => (
      <Post 
        key={`Post-${i}`} 
        body={p.body}
        title={p.title}
        id={p.id}
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
