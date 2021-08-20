import React, { useState, useEffect } from 'react';
import {
  UserCard,
  UserSearchForm
} from '../components';


export default function UserList(props) {

  const [ filteredUsers, setFilteredUsers ] = useState(props.users);
  const [ search, setSearch ] = useState('');
  const [ sortBy, setSortBy ] = useState(0);


  // handles searching
  useEffect(() => {
    if (search !== '') {
      let searchReg = new RegExp(`^${search.toLowerCase()}`);

      // firstname lastname username
      let newFiltered = props.users.filter(u => {
        switch(parseInt(sortBy)) {
          case 0: return searchReg.test(u.name.toLowerCase());
          case 1: return searchReg.test(u.name.toLowerCase().split(" ")[1]);
          case 2: return searchReg.test(u.username.toLowerCase());
          default: return searchReg.test(u.name.toLowerCase());
        }
      })
      setFilteredUsers(newFiltered);
    }
  },[search]);

  // handles sorting
  useEffect(() => {
    let newUserList = [...filteredUsers];
    switch(parseInt(sortBy)){
      case 0: 
        newUserList = newUserList.sort(sortByFirstName); 
        setFilteredUsers(newUserList);
        break;
      case 1: 
        newUserList = newUserList.sort(sortByLastName);  
        setFilteredUsers(newUserList);
        break;
      case 2: 
        newUserList = newUserList.sort(sortByUserName); 
        setFilteredUsers(newUserList); 
        break;
      default: console.log("there's an issue in the sortBy effect")
    }
  },[sortBy]);


  const handleSelectUser = (e, id) => {
    e.stopPropagation();
    props.selectUser(id)
  }


  const filterNameTitle = (name, getLastName = false) => {
    if (/^mr/.test(name.toLowerCase()) || /^mrs/.test(name.toLowerCase()) || /^ms/.test(name.toLowerCase())) {
      name = getLastName ? 
        name.toLowerCase().split(" ").slice(2)[0]
        : 
        name.toLowerCase().split(" ").slice(1).join(" ");
    }
    else {
      name = getLastName ? 
        name.toLowerCase().split(" ").slice(1)[0] 
        : 
        name.toLowerCase().split(" ").join(" ");
    }
    return name;
  }


  const sortByFirstName = (first, second) => {
    // dealing with "Mr" and "Mrs"
    let firstName, secondName;
    if (/^Mr/.test(first.name) || /^Mrs/.test(first.name)) firstName = first.name.split(" ").slice(1).join(" ");
    else firstName = first.name;
    if (/^Mr/.test(second.name) || /^Mrs/.test(second.name)) secondName = second.name.split(" ").slice(1).join(" ");
    return first.name.localeCompare(second.name, 'en', {sensitivity: 'base', ignorePunctuation: true});
  }

  const sortByLastName = (first, second) => {
    // dealing with "Mr" and "Mrs"
    let firstLastName, secondLastName;
    let firstNameArray = first.name.split(" ");
    let secondNameArray = second.name.split(" ");
    if (/^Mr/.test(firstNameArray[0]) || /^Mrs/.test(firstNameArray[0])) {
      firstLastName = firstNameArray[2];
    }
    else firstLastName = firstNameArray[1];
    if (/^Mr/.test(secondNameArray[0]) || /^Mrs/.test(secondNameArray[0])) {
      secondLastName = secondNameArray[2];
    }
    else secondLastName = secondNameArray[1];
    return firstLastName.localeCompare(secondLastName, 'en', {sensitivity: 'base', ignorePunctuation: true});
  }

  const sortByUserName = (first, second) => {
    return first.username.localeCompare(second.username, 'en', {sensitivity: 'base', ignorePunctuation: true});
  }

  let userElements = filteredUsers.map((u, i) => (
    <li key={`user-${i}`} onClick={e => handleSelectUser(e, u.id)}>
      <UserCard 
        name={u.name}
        username={u.username}
        email={u.email}
        id={u.id}
      />
    </li>
  ))
  
  return (
    <div className="user-list-container">
      <UserSearchForm handleSubmit={setSearch} sortBy={sortBy} setSortBy={setSortBy} />
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
