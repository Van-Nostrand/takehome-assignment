import React from 'react';
import {
  UserCard,
  UserSearchForm
} from '../components';


export default function UserList(props) {


  let userElements = props.users.map((u, i) => (
    <li key={`user-${i}`}>
      <UserCard 
        name={u.name}
        username={u.username}
        email={u.email}
      />
    </li>
  ))
  return (
    <div className="user-list-container">
      <UserSearchForm />
      <ul className="user-list">
        {userElements}
      </ul>
      
    </div>
  )
}

UserList.defaultProps = {
  users: [
    { 
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
    { 
      name: 'Jane Smith',
      phone: "1-710-555-2231 x83441",
      username: 'Janealangadingdong',
      website: 'tarzanfangirl.org',
      id: 2,
      email: 'jane@aol.com',
      company: {
        name: "A Building with cubicles",
        catchPhrase: 'No TPS is ever too reported',
        bs: 'photocopiers and toner run by suits'
      },
      address: { 
        city: "The Big Apple",
        geo: { 
          lat: "-107.3159", 
          lng: "32.1496" 
        },
        street: "5th ave",
        suite: "Apt. 932",
        zipcode: "0100-0000"
      },
    },
  ]
}

let standardUserObject = {
  address: { 
    city: "Gwenborough",
    geo: { 
      lat: "-37.3159", 
      lng: "81.1496" 
    },
    street: "Kulas Light",
    suite: "Apt. 556",
    zipcode: "92998-3874"
  },
  company: { 
    name: "Romaguera-Crona", 
    catchPhrase: "Multi-layered client-server neural-net", 
    bs: "harness real-time e-markets" 
  },
  email: "Sincere@april.biz",
  id: 1,
  name: "Leanne Graham",
  phone: "1-770-736-8031 x56442",
  username: "Bret",
  website: "hildegard.org",
}