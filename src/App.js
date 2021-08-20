import React, { useState, useEffect } from "react";
import { 
  Post, 
  UserCard,
  UserSearchForm,
  SearchTypeSelector,
  Topbar,
  Sidebar,
  LoadingDiv
} from './components';

import {
  UserList,
  Wall,
  UserDetails
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
  const [ view, setView ] = useState(2);
  const [ selectedUserId, setSelectedUserId ] = useState(2);
  
  const windowSize = useGetWindowSize();

  useEffect(() => {
    fetchAllUsers()
      .then(u => setUsers(u)).then(() => setLoadingUsers(false));
    fetchAllPosts()
      .then(p => setPosts(p)).then(() => setLoadingPosts(false));
    
    console.log("loading done")
  },[]);

  const selectUser = (id) => {
    setSelectedUserId(id);
    setView(2);
  }


  const renderSwitch = () => {
    switch(parseInt(view)) {
      case 0: return <UserList users={users} selectUser={selectUser} /> 
      case 1: return <Wall posts={posts} />
      case 2: return <UserDetails profile={users.filter(u => u.id === selectedUserId)[0]} />
      default: return <div>Error</div>
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
          { (view === 0 && loadingUsers) || (view === 1 && loadingPosts) ? 
            <LoadingDiv />
            :
            renderSwitch()
          }
        </div>
      </div>
    </div>
  )
}