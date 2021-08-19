import React, { useState, useEffect } from "react";
import MessagePost from './components/MessagePost';
import { fetchAllUsers } from './constants/apiCalls';

/*
  users
    posts
      comments
    albums
      photos

*/
export default function App() {

  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const ENDPOINTS = ['users','posts','comments','albums','photos'];

  useEffect(() => {
    fetchAllUsers().then(u => setUsers(u));
  },[]);
  useEffect(() => {
    if (users && users.length > 0) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {

        })
    }
  },[users]);


  let postElements = posts.map((p, i) => {
    // return (
    //   <MessagePost 
    //     key={`post${i}`} 
    //     userName={users[p.userId - 1].name} 
    //     text={p.body} 
    //   />
    // )
  })
    
  if (loading) {
    return (<div>LOADING</div>);
  }
  return(
    <div className="dashboard-container">
      {/* <ul>{postElements}</ul> */}
    </div>
  )
}