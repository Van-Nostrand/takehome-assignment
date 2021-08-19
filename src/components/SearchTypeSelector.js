import React, {useState} from 'react'

export default function SearchTypeSelector(props) {

  return (
    <div className="search-type-selector">
      <select className="selector" value={props.value} onChange={props.handleSelect}>
        <option value="0">First Name</option>
        <option value="1">Last Name</option>
      </select>
    </div>
  )
}

SearchTypeSelector.defaultProps = {
  value: 1,
  handleSelect: () => console.log("parent has not provided a handler function to SearchTypeSelector, and value is ", e.target.value)
}