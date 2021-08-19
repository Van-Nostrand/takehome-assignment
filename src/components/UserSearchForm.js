import React, {useState} from 'react'

export default function UserSearchForm(props) {
  const [ input, setInput ] = useState('');

  const handleSubmit = (e) => {
    e.stopPropagation();
    props.handleSubmit(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={e => setInput(e.target.value)} />
      
    </form>
  )
}
