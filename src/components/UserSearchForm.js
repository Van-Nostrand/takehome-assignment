import React, {useState} from 'react'
import SearchTypeSelector from './SearchTypeSelector';

export default function UserSearchForm(props) {
  const [ input, setInput ] = useState('');
  const [ searchBy, setSearchBy ] = useState(0);

  const handleSubmit = (e) => {
    e.stopPropagation();
    props.handleSubmit(e.target.value);
  }
  return (
    <div className="user-search-form-container">
      <h1>Users</h1>
      <div className="user-search-form-container-inner">
        <form className="user-search-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Search</label>
          <input name="name" value={input} onChange={e => setInput(e.target.value)} />
        </form>
        <SearchTypeSelector 
          value={searchBy}
          handleSelect={setSearchBy}
        />
      </div>
    </div>
  )
}


UserSearchForm.defaultProps = {
  handleSubmit: q => console.log("a parent has not passed a handleSubmit function to UserSearchForm. Query is ", q),

}