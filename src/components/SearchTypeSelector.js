import React from 'react';

export default function SearchTypeSelector(props) {

  return (
    <div className="search-by-what">
      <label htmlFor="fl-selector">Sort By</label>
      <select name="fl-selector" className="search-by-what-selector" value={props.value} onChange={e => props.handleSelect(e.target.value)}>
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