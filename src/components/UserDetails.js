import React, { useState, useEffect } from 'react';
import { 
  LoadingDiv, 
  Post, 
  UserDetailsSection, 
  UserPostsSection 
} from '.';
import { fetchUsersItems } from '../functions/apiCalls';

export default function UserDetails(props) {

  const [ posts, setPosts ] = useState([]);

  const { name, username, phone, website, email, company, address } = props.profile;
  
  // load the users posts
  useEffect(() => {
    fetchUsersItems(props.profile.id, 'posts')
    .then(p => setPosts(p));
  },[]);

  return (
    <div className="user-details">
      <div className="user-details-info">
        <UserDetailsSection sectionTitle="Contact Info">
          <div>{name}</div>
          <div>{username}</div>
          <div>{phone}</div>
          <a href={website}>{website}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </UserDetailsSection>

        <UserDetailsSection sectionTitle="Address">
          <div>{address.street}</div>
          <div>{address.suite}</div>
          <div>{address.city}</div>
          <div>{address.zipcode}</div>
        </UserDetailsSection>
          
        <UserDetailsSection sectionTitle="Company">
          <div>{company.name}</div>
          <div>{company.bs}</div>
          <div>"{company.catchPhrase}"</div>
        </UserDetailsSection> 
      </div>
           
      <UserPostsSection 
        name={name}
        posts={posts}
      />
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
