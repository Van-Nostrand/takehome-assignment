import React from 'react';
import { Post, LoadingDiv } from '../components';


// saw an opportunity for a "post feed" or wall, but decided to stick to the instructions
export default function Wall(props) {

  const renderPosts = () => {
    return (
      props.posts.map((p, i) => (
        <Post 
          key={`post-${i}`} 
          post={p}
          selectPost={props.selectPost}
        />
      ))
    )
  }

  return (
    <div className="wall">
      <ul>
        { props.posts.length > 0 ?
          renderPosts()
          :
          <LoadingDiv />
        }
      </ul>
    </div>
  )
}
