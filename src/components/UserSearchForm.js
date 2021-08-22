import React, {useState} from 'react'
import UserSortingMethodSelector from './UserSortingMethodSelector';

export default function UserSearchForm(props) {
  
  return (
    <div className="user-search-form-container">
      <div className="user-search-form-container-inner">
        <label htmlFor="name">Search</label>
        <input name="name" value={props.searchTerm} onChange={e => props.handleSubmit(e.target.value)} />
      </div>
    </div>
  )
}


UserSearchForm.defaultProps = {
  handleSubmit: q => console.log("a parent has not passed a handleSubmit function to UserSearchForm. Query is ", q),
}