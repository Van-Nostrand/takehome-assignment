import React from 'react'

export default function Comment(props) {
  return (
    <div className="comment">
      <div>{props.comment.name}</div>
      <div>{props.comment.body}</div>
      <div>{props.comment.email}</div>
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