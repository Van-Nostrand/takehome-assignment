import React from 'react'

export default function Topbar(props) {
  return (
    <div className="topbar">
      <h1>The Dashboard</h1>
    </div>
  )
}

Topbar.defaultProps = {
  value: 0,
  handleSelect: v => console.log("a parent has not passed an onchange handler to Topbar. Value is now ", v)
}
