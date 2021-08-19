import React from 'react'

export default function UserList(props) {
  return (
    <div className="user-list-container">
      <div className="user-list-search">
        <div className="search-field"></div>
        <div className="sortby-picker"></div>
      </div>
      <ul className="user-list"></ul>
      
    </div>
  )
}
