import React from 'react';

export default function UserDetailsSection(props) {

  // console.log(props.children)
  return (
    <div className={`user-details-section user-details-section-${props.sectionTitle.toLowerCase().split(" ").join("-")}`}>
      <div className="user-details-section-title">
        {props.sectionTitle}
      </div>
      <div className="user-details-section-items">
        {props.children}
      </div>
    </div>
  )
}

UserDetailsSection.defaultProps = {
  sectionTitle: 'Contact Info'
}