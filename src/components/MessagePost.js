import React from 'react'

export default function MessagePost(props) {
  console.log('src/components/MessagePost.js: props.userName is ', props.userName);
  return (
    <li className="message-post">
      <div>{props.userName}</div>
      <div>{props.text}</div>
    </li>
  )
}

MessagePost.defaultProps = {
  userName: 'John Smith',
  text: 'Lorem ipsum whatever'
}