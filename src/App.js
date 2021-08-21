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
  UserDetails,
  PostDetails
} from './views';
import { 
  fetchSomething
} from './functions/apiCalls';

import { useGetWindowSize } from './hooks/useGetWindowSize';

export default function App() {

  const [ posts, setPosts ] = useState([]);
  const [ loadingPosts, setLoadingPosts ] = useState(true);
  const [ view, setView ] = useState(0);
  const [ selectedPostId, setSelectedPostId ] = useState(null);
  
  const windowSize = useGetWindowSize();

  // useEffect(() => {
  //   fetchSomething('users')
  //     .then(u => {
  //       setUsers(u);
  //       setLoadingUsers(false);
  //     });
  // },[]);

  // a lot of the post titles are super long gibberish, I found that annoying and added this
  const reformatPosts = (posts) => {
    let newposts = posts.map(p => {
      let newTitle = p.title.split(" ");
      if (newTitle.length > 4) { newTitle = newTitle.slice(0,3).join(" ")}
      else newTitle = newTitle.join(" "); 
      return ({...p, title: newTitle});
    });
    return newposts;
  }

  const selectUser = (id) => {
    setSelectedUserId(id);
    setView(2);
  }

  const selectPost = (id) => {
    setSelectedPostId(id);
    setView(3);
  }


  const renderSwitch = () => {
    switch(parseInt(view)) {
      case 0: return <UserList selectUser={selectUser} /> 
      // case 1: return <Wall selectPost={selectPost} />
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
          { renderSwitch() }
        </div>
      </div>
    </div>
  )
}