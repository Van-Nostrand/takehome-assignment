import React, {useState} from 'react'
import SearchTypeSelector from './SearchTypeSelector';
import { useShallowEqual } from '../hooks/useShallowEqual';

import { useDispatch } from 'react-redux';
import { setSearchTerm, setSortingMethod } from '../store/userlist/actions';

export default function UserSearchForm(props) {
  const dispatch = useDispatch();

  const [ input, setInput ] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(input));
  }


  return (
    <div className="user-search-form-container">
      <h1>Users</h1>
      <div className="user-search-form-container-inner">
        <form className="user-search-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Search</label>
          <input name="name" value={input} onChange={e => setInput(e.target.value)} />
        </form>
      </div>
    </div>
  )
}


UserSearchForm.defaultProps = {
  handleSubmit: q => console.log("a parent has not passed a handleSubmit function to UserSearchForm. Query is ", q),
  sortBy: 0,
  setSortBy: () => console.log("a parent has not passed a setSortBy function to UserSearchForm")

}