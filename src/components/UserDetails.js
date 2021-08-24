import React, { useState, useEffect } from 'react';
import { 
  LoadingDiv, 
  Post, 
  UserDetailsSection, 
  UserPostsSection 
} from '.';
import { fetchUsersItems, fetchUserInfo } from '../functions/apiCalls';

const extRegex = /(\sx){1}/;

export default function UserDetails(props) {

  const [ posts, setPosts ] = useState([]);
  const [ userData, setUserData ] = useState({});
  const { name, username, phone, website, email, company, address } = props.profile;
  
  // load the users posts
  useEffect(() => {

    // Promise.all([
    //   fetchUserInfo(props.profile.id),
    //   fetchUsersItems(props.profile.id, 'posts')
    // ])
    //   .then(([userInfoData, userPostsData]) => {
    //     if (userPostsData === undefined || userPostsData.length === 0) {
    //       setPosts(null);
    //       setUserData({...userInfoData});
    //     }
    //     else {
    //       setPosts(userPostsData);
    //       setUserData({...userInfoData});
    //     }
    //   });
    fetchUsersItems(props.profile.id, 'posts')
      .then(p => {
        // check that the user has actually created posts
        if (p === undefined || p.length === 0){
          setPosts(null);
        }
        else {
          setPosts(p)
        }
      });
  },[]);

  // parse extension from phone numbers which have one
  const phoneString = extRegex.test(phone) ? 
    (() => {
      const [num, ex] = phone.split(" x");
      return `tel:${num},${ex}`;
    })()
    :
    `tel:${phone}`;


  return (
    <div className="user-details">
      <div className="user-details-info">

        <UserDetailsSection sectionTitle="Contact Info">
          <div>Username: {username}</div>
          <div>Email: <a href={`mailto:${email}`}>{email}</a></div>
          <div>Phone: <a href={phoneString} target="_blank" rel="nofollow external">{phone}</a></div>
          <div>Website: <a href={`http://${website}`} target="_blank" rel="external noopener noreferrer">{website}</a></div>
        </UserDetailsSection>

        <UserDetailsSection sectionTitle="Address">
          <div>{address.suite} {address.street}, {address.city}, {address.zipcode}</div>
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
