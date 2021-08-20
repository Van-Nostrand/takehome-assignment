import React, { useState, useEffect } from "react";
import { 
  Post, 
  UserCard,
  UserSearchForm,
  SearchTypeSelector,
  Topbar,
  Sidebar
} from './components';

import {
  UserList,
  Wall,
} from './views';
import { 
  fetchAllUsers, 
  fetchAllPosts, 
  fetchAllAlbums, 
  fetchAllComments, 
  fetchAllPhotos 
} from './constants/apiCalls';

import { useGetWindowSize } from './hooks/useGetWindowSize';

export default function App() {

  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ loadingUsers, setLoadingUsers ] = useState(true);
  const [ loadingPosts, setLoadingPosts ] = useState(true);
  const [ view, setView ] = useState(1);
  
  const windowSize = useGetWindowSize();

  useEffect(() => {
    fetchAllUsers()
      .then(u => setUsers(u)).then(() => setLoadingUsers(false));
    fetchAllPosts()
      .then(p => setPosts(p)).then(() => setLoadingPosts(false));
    
    console.log("loading done")
  },[]);

  let centerElement = <div>LOADING</div>
  if (!loadingUsers) {
    switch(parseInt(view)) {
      case 0:
        centerElement = <UserList users={users} /> 
        break;
      case 1:
        centerElement = <Wall posts={posts} />
        break;
      default: centerElement = <div>Error</div>
    }
  }
  
  return(
    <div className="dashboard">
      { windowSize.width > 900 ?
        <Sidebar />
        :
        <></>
      }
      <div className="dashboard-inner">
        <Topbar value={view} handleSelect={setView} />
        <div className="dashboard-component-container">
          {centerElement}
        </div>
      </div>
    </div>
  )
}