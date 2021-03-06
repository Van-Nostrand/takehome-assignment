import React, { useState, useEffect } from 'react';


import {
  UserDetails,
  LoadingDiv,
  UserList,
} from '../components';

import { 
  sortByFirstName,
  sortByLastName,
  sortByUserName,
  sortByEmail,
} from '../functions/sortingFunctions';

import {
  fetchSomething,
} from '../functions/apiCalls';


// the "Users" view. Displays a list of all users or details about one selected user
export default function Users(props) {

  const [ users, setUsers ] = useState([]);
  const [ loadingUsers, setLoadingUsers ] = useState(true);
  const [ selectedUserId, setSelectedUserId ] = useState(null);
  const [ filteredUsers, setFilteredUsers ] = useState(props.users);
  const [ searchTerm, setSearchTerm ] = useState('');
  // 0 sorts by first name, 1 by last name, 2 by username, and 3 by email
  const [ sortingMethod, setSortingMethod ] = useState(0);
  const [ userView, setUserView ] = useState(0);


  // load users on mount
  useEffect(() => {
    fetchSomething('users')
      .then(u => {
        setUsers(sortUsers(u));
        setLoadingUsers(false);
      });
  },[]);


  // handles searching
  useEffect(() => {
    if ( searchTerm !== '') {
      setFilteredUsers(sortUsers(fuzzySearchUsers(users, searchTerm)));
    }
    else setFilteredUsers([...users]);
  },[users, searchTerm]);

  
  // handles sorting
  useEffect(() => {
    setFilteredUsers(sortUsers([...filteredUsers]));
  },[sortingMethod]);


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
    setSelectedUserId(id)
    setUserView(1);
  }

  // clicking this will return to the main user list view
  const handleUserTitleClick = () => {
    if (userView !== 0) {
      setUserView(0);
      setSelectedUserId(null);
    }
  }

  const renderSwitch = () => {
    switch(userView) {
      case 0: {
        return (
          <UserList 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortingMethod={sortingMethod}
            setSortingMethod={setSortingMethod}
            users={filteredUsers}
            handleSelectUser={handleSelectUser}
          />
        )
      }
      case 1: {
        return (
          <UserDetails 
            profile={users.filter(u => u.id === selectedUserId)[0]}
          />
        )
      }
    }
  }


  return (
    <div className="user-list-container">
      <div className="user-list-title">
        <div 
          className={`user-list-title-header${userView !== 0 ? ' user-list-title-selected' : ''}`} 
          onClick={handleUserTitleClick}
        >
          Users
        </div>
        { selectedUserId !== null ? 
          <div className="user-list-title-name">
            &nbsp; &gt; {users.filter(u => u.id === selectedUserId)[0].name}
          </div>
          :
          <></>
        }
      </div>

      { loadingUsers ? 
        <LoadingDiv />
        : 
        renderSwitch()
      }

    </div>
  )
}


Users.defaultProps = {
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
