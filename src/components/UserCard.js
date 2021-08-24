import React from 'react';
import DefaultUserIcon from '../assets/user-icon.png';

// a small box that briefly describes a user
// appears in the list of users
export default function UserCard(props) {
  return (
    <li className="user-card" onClick={props.handleSelectUser}>
      <div className="user-card-photo">
        <img src={props.photoUrl} />
      </div>
      <div className="user-card-info">
        <div className="user-card-info-name">
          {props.name}
        </div>
        <div className="user-card-info-user-name">
          "{props.username}"
        </div>
        <a 
          className="user-card-info-email" 
          href={`mailto:${props.email}`} 
          onClick={e => e.stopPropagation()}
        >
          {props.email}
        </a>
      </div>
    </li>
  )
}

UserCard.defaultProps = {
  name: 'John Smith',
  username: 'The Johninator',
  email: 'js@gmail.com',
  photoUrl: DefaultUserIcon 
}