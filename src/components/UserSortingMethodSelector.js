import React from 'react';

export default function UserSortingMethodSelector(props) {

  return (
    <div className="search-by-what">
      <label htmlFor="fl-selector">Sort By</label>
      <select name="fl-selector" className="search-by-what-selector" value={props.value} onChange={e => props.handleSelect(e.target.value)}>
        <option value="0">First Name</option>
        <option value="1">Last Name</option>
        <option value="2">Username</option>
        <option value="3">Email</option>
      </select>
    </div>
  )
}

UserSortingMethodSelector.defaultProps = {
  value: 1,
  handleSelect: () => console.log("parent has not provided a handler function to SearchTypeSelector, and value is ", e.target.value)
}