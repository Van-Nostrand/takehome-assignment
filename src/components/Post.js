import React from 'react';

export default function Post(props) {
  
  const { body, id, title } = props.post;
  
  const handleClick = (e) => {
    e.stopPropagation();
    props.selectPost(id);
  }
  
  return (
    <li className="post" onClick={handleClick}>
      <div className="post-title">{title}</div>
      <p>{body}</p>
    </li>
  )
}

Post.defaultProps = {
  post: {
    body: "raw denim chicharrones taxidermy, beard locavore \nfanny pack small batch kitsch dreamcatcher swag. \nFour loko farm-to-table kickstarter authentic affogato. \nAuthentic irony tofu seitan, chia church-key raclette vice edison bulb letterpress XOXO godard. \nShabby chic mixtape meggings scenester messenger bag. \nYOLO tumeric cronut hella before they sold out marfa blog celiac sustainable skateboard.",
    id: 0,
    title: 'Lorem ipsum whatever',
    userId: 0,
  }
}