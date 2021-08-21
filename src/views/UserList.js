import React, { useState, useEffect } from 'react';
import {
  UserCard,
  UserSearchForm,
  SortingMethodSelector,
  UserDetails,
  LoadingDiv,
} from '../components';

import { 
  sortByFirstName,
  sortByLastName,
  sortByUserName,
  sortByEmail,
  removeTitleFromName
} from '../functions/sortingFunctions';


export default function UserList(props) {

  const [ users, setUsers ] = useState([]);
  const [ loadingUsers, setLoadingUsers ] = useState(true);
  const [ selectedUserId, setSelectedUserId ] = useState(null);
  const [ filteredUsers, setFilteredUsers ] = useState(props.users);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ sortingMethod, setSortingMethod ] = useState(0);


  useEffect(() => {
    fetchSomething('users')
      .then(u => {
        setUsers(u);
        setLoadingUsers(false);
      });
  },[]);

  // handles searching
  useEffect(() => {
    if (searchTerm !== '') {
      setFilteredUsers(sortUsers(fuzzySearchUsers(users, searchTerm)));
    }
    else setFilteredUsers([...users]);
  },[searchTerm]);

  
  // handles sorting
  useEffect(() => {
    setFilteredUsers(sortUsers([...filteredUsers]));
  },[sortingMethod]);


  // filters out users based on searchTerm terms
  // Not using this anymore
  // const searchUsersByMethod = (userList) => {
  //   const searchReg = new RegExp(`^${searchTerm.toLowerCase()}`);
  //   // by case #: firstname lastname username
  //   return userList.filter(u => {
  //     switch(parseInt(sortingMethod)) {
  //       case 0: return searchReg.test(removeTitleFromName(u.name).toLowerCase());
  //       case 1: return searchReg.test(removeTitleFromName(u.name).toLowerCase().split(" ")[1]);
  //       case 2: return searchReg.test(u.username.toLowerCase());
  //       default: return searchReg.test(removeTitleFromName(u.name).toLowerCase());
  //     }
  //   })
  // }


  // matches users name, email, and username based on searchTerm term
  const fuzzySearchUsers = (userList, searchTerm) => {
    let searchReg = new RegExp(`${searchTerm}`, 'i');
    return userList.filter(u => {
      if (searchReg.test(u.name) || searchReg.test(u.email) || searchReg.test(u.username)) {
        return true;
      }
      return false;
    })
  }


  // takes an array of users, sorts em
  const sortUsers = (userList) => {
    switch(parseInt(sortingMethod)){
      case 0: 
        return userList.sort(sortByFirstName); 
      case 1: 
        return userList.sort(sortByLastName);  
      case 2: 
        return userList.sort(sortByUserName); 
      case 3:
        return userList.sort(sortByEmail);
      default: console.log("there's an issue while sorting users")
    }
  }


  const handleSelectUser = (e, id) => {
    e.stopPropagation();
    props.selectUser(id)
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
      <h1>Users</h1>

      <div className="search-sort-container">
        <UserSearchForm 
          searchTerm={searchTerm}
          handleSubmit={setSearchTerm} 
          sortingMethod={sortingMethod} 
          setSortingMethod={setSortingMethod} 
        />
        <SortingMethodSelector 
          value={sortingMethod}
          handleSelect={setSortingMethod}
        />
      </div>
      { loadingUsers ? 
        <LoadingDiv />
        :
        <ul className="user-list">
          {userElements} 
        </ul>
      }
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
