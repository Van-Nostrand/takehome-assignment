import React from 'react';
import DefaultUserIcon from '../assets/user-icon.png';

export default function UserCard(props) {
  return (
    <div className="user-card">
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
        <a href={`mailto:${props.email}`} className="user-card-info-email">
          {props.email}
        </a>
      </div>
    </div>
  )
}

UserCard.defaultProps = {
  name: 'John Smith',
  username: 'The Johninator',
  email: 'js@gmail.com',
  photoUrl: DefaultUserIcon 
}