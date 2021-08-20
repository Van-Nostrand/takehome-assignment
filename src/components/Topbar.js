import React from 'react'

export default function Topbar(props) {
  return (
    <div className="topbar">
      <select 
        name="view-select" 
        className="view-selector" 
        value={props.value} 
        onChange={e => props.handleSelect(e.target.value)}
      >
        <option value="0">Userlist</option>
        <option value="1">The wall</option>
        <option value="2">User Profile</option>
      </select>
    </div>
  )
}

Topbar.defaultProps = {
  value: 0,
  handleSelect: v => console.log("a parent has not passed an onchange handler to Topbar. Value is now ", v)
}
