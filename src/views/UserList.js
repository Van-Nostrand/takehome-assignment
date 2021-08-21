import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserDetails from './UserDetails';
import {
  UserCard,
  UserSearchForm,
  SearchTypeSelector,
  LoadingDiv
} from '../components';

import {
  sortByFirstName,
  sortByLastName,
  sortByUserName,
  filterTitleFromName
} from '../constants/sortingFunctions';

import { useShallowEqual } from '../hooks/useShallowEqual';
import { setSelectedUserId, loadUsers, setUpUserList } from '../store/userlist/actions';
import { setFilteredUsers } from '../store/userlist/actions';


export default function UserList(props) {
  
  const dispatch = useDispatch();
  const { searchTerm, sortingMethod, users, loadingUsers, view } = useShallowEqual(state => state.userlist);
  // const [ filteredUsers, setFilteredUsers ] = useState([]);

  // fetch users from server on load
  useEffect(() => {
    dispatch(loadUsers());
  },[]);


  // filters out users based on search terms
  const filterUsers = (userList) => {
    const searchReg = new RegExp(`^${searchTerm.toLowerCase()}`);

    // by case #: firstname lastname username
    return userList.filter(u => {
      switch(parseInt(sortingMethod)) {
        case 0: return searchReg.test(filterTitleFromName(u.name).toLowerCase());
        case 1: return searchReg.test(filterTitleFromName(u.name).toLowerCase().split(" ")[1]);
        case 2: return searchReg.test(u.username.toLowerCase());
        default: return searchReg.test(filterTitleFromName(u.name).toLowerCase());
      }
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
      default: console.log("there's an issue in the sortingMethod effect")
    }
  }


  const handleSelectUser = (e, id) => {
    e.stopPropagation();
    dispatch(setSelectedUserId(id));
  }

  const renderSwitch = () => {
    switch(view) {
      case 0:
        let userElements = searchTerm !== "" ? 
          sortUsers(filterUsers([ ...users ]))
          :
          sortUsers([ ...users ]);


        userElements = userElements.map((u, i) => (
          <li key={`user-${i}`} onClick={e => handleSelectUser(e, u.id)}>
            <UserCard 
              name={u.name}
              username={u.username}
              email={u.email}
              id={u.id}
            />
          </li>
        ));
        return (
        <>
          <div>
            <UserSearchForm />
            <SearchTypeSelector />
          </div>
          <ul className="user-list">
            {userElements}
          </ul>
        </>)
      case 1:
        return <UserDetails />
      default: return <div>ERROR</div>
    }
  }


  return (
    <div className="user-list-container">
      {renderSwitch()}
    </div>
  )
}

