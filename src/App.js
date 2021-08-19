import React, { useState, useEffect } from "react";
import MessagePost from './components/MessagePost';
import UserCard from './components/UserCard';
import { 
  fetchAllUsers, 
  fetchAllPosts, 
  fetchAllAlbums, 
  fetchAllComments, 
  fetchAllPhotos 
} from './constants/apiCalls';



/*
  users
    posts
      comments
    albums
      photos

*/
// const ENDPOINTS = ['users','posts','comments','albums','photos'];
export default function App() {

  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(true);


  useEffect(() => {
    // fetchAllUsers()
    //   .then(u => setUsers(u));
    // fetchAllPosts()
    //   .then(p => setPosts(p));
    // fetchAllPhotos()
    //   .then(a => console.log(a));
    setLoading(false);
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

  // console.log(users);
  // console.log(posts);
    
  if (loading) {
    return (<div>LOADING</div>);
  }
  return(
    <div className="dashboard-container">
      {/* <ul>{postElements}</ul> */}
      <UserCard />
    </div>
  )
}