import React, { useState, useEffect } from 'react';
import { LoadingDiv, Post } from '../components';
import { fetchUsersItems } from '../constants/apiCalls';

export default function UserDetails(props) {

  const [ posts, setPosts ] = useState([]);

  const { name, username, phone, website, email, company, address } = props.profile;

  useEffect(() => {
    fetchUsersItems(props.profile.id, 'posts')
      .then(p => setPosts(p));
  },[]);

  let postElements = [];
  if (posts.length > 0) {
    postElements = posts.map(post => <Post key={`userpost-${post.id}`} post={post} />)
  }

  return (
    <div className="user-details">
      <div className="user-details-header">Contact Info</div>
      <div className="user-details-name">{name}</div>
      <div className="user-details-username">{username}</div>
      <div className="user-details-phone">{phone}</div>
      <div className="user-details-website">{website}</div>
      <div className="user-details-email">{email}</div>
      <div className="user-details-header">Address</div>
      <div className="user-details-address">
        <div className="user-details-address-city">{address.city}</div>
        <div className="user-details-address-street">{address.street}</div>
        <div className="user-details-address-suite">{address.suite}</div>
        <div className="user-details-address-zipcode">{address.zipcode}</div>
      </div>
      <div className="user-details-header">
        Company
      </div>
      <div className="user-details-company">
        <div className="user-details-company-label">Name: </div>
        <div className="user-details-company-name">{company.name}</div>
        
        <div className="user-details-company-label">Catchphrase: </div>
        <div className="user-details-company-catchphrase">{company.catchPhrase}</div>
        
        <div className="user-details-company-label">BS: </div>
        <div className="user-details-company-bull">{company.bs}</div>
      </div>
      

      <ul className="user-details-posts">
        { posts.length === 0 ? <LoadingDiv /> : postElements }
      </ul>
    </div>
  )
}

UserDetails.defaultProps = {
  profile: { 
    name: 'John Smith',
    phone: "1-770-555-8031 x56441",
    username: 'The Johninator',
    website: 'johnisthebomb.ca',
    id: 1,
    email: 'john@smith.com',
    company: {
      name: "Generic dead guy inc",
      catchPhrase: 'Who are we? Good question!',
      bs: 'unknown people to your door in 15 min or less'
    },
    address: { 
      city: "Plaintown",
      geo: { 
        lat: "-27.3159", 
        lng: "51.1496" 
      },
      street: "123 1st Ave",
      suite: "Apt. 1",
      zipcode: "0000-0000"
    },
  },
}
