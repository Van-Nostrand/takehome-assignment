import React, {useState} from 'react'
import SortingMethodSelector from './SortingMethodSelector';

export default function UserSearchForm(props) {
  const [ input, setInput ] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(input);
  }

  return (
    <div className="user-search-form-container">
      <div className="user-search-form-container-inner">
        {/* <form className="user-search-form" onSubmit={handleSubmit}> */}
          <label htmlFor="name">Search</label>
          <input name="name" value={props.searchTerm} onChange={e => props.handleSubmit(e.target.value)} />
        {/* </form> */}
        
      </div>
    </div>
  )
}


UserSearchForm.defaultProps = {
  handleSubmit: q => console.log("a parent has not passed a handleSubmit function to UserSearchForm. Query is ", q),
  sortingMethod: 0,
  setSortingMethod: () => console.log("a parent has not passed a setSortingMethod function to UserSearchForm")

}