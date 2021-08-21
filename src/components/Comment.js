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

// comment
// body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
// email: "Eliseo@gardner.biz",
// id: 1,
// name: "id labore ex et quam laborum",
// postId: 1,