import React from 'react'

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <div>{comment.name}</div>
      <div>{comment.body}</div>
      <div>{comment.email}</div>
    </div>
  )
}


Comment.defaultProps = {
  comment: {
    body: "I HAVE SOMETHING TO SAY ABOUT THIS",
    email: "troll@theyoutubecommentssection.com",
    name: "MY OPINION"
  }
}
