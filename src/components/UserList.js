import React from 'react';
import { 
  UserCard,
  UserSearchForm,
  UserSortingMethodSelector
} from './index';

export default function UserList(props) {

  const renderUsers = () => {
    return (
      props.users.map((u, i) => (
        <li 
          key={`user-${i}`} 
          onClick={e => props.handleSelectUser(e, u.id)}
        >
          <UserCard 
            name={u.name}
            username={u.username}
            email={u.email}
            id={u.id}
          />
        </li>
      ))
    )
  }

  return (
    <>
      <div className="search-sort-container">
        <UserSearchForm 
          searchTerm={props.searchTerm}
          handleSubmit={props.setSearchTerm} 
          sortingMethod={props.sortingMethod} 
          setSortingMethod={props.setSortingMethod} 
        />
        <UserSortingMethodSelector 
          value={props.sortingMethod}
          handleSelect={props.setSortingMethod}
        />
      </div>
      <ul className="user-list">
        { renderUsers() } 
      </ul>
    </>
  )
}
