import React from 'react';
import { useDispatch } from 'react-redux';
import { useShallowEqual } from '../hooks/useShallowEqual';
import { setSortingMethod } from '../store/userlist/actions';

export default function SearchTypeSelector(props) {

  const dispatch = useDispatch();
  const { sortingMethod } = useShallowEqual(state => state.userlist);

  const handleChange = (e) => {
    dispatch(setSortingMethod(e.target.value));
  }

  return (
    <div className="search-by-what">
      <label htmlFor="fl-selector">Sort By</label>
      <select name="fl-selector" className="search-by-what-selector" value={sortingMethod} onChange={handleChange}>
        <option value="0">First Name</option>
        <option value="1">Last Name</option>
        <option value="2">Username</option>
      </select>
    </div>
  )
}

// SearchTypeSelector.defaultProps = {
//   value: 1,
//   handleSelect: () => console.log("parent has not provided a handler function to SearchTypeSelector, and value is ", e.target.value)
// }