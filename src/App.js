import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
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
} from './constants/apiCalls';

import {
  loadUsers, 
  loadPosts, 
  basicSetState,
  loadUsersAndPosts
} from './store/actions';

import { useShallowEqual } from './hooks/useShallowEqual';
import { useGetWindowSize } from './hooks/useGetWindowSize';

export default function App() {

  const dispatch = useDispatch();
  const { rootView } = useShallowEqual(state => state.rootState);

  const [ view, setView ] = useState(0);
  const [ selectedUserId, setSelectedUserId ] = useState(2);
  const [ selectedPostId, setSelectedPostId ] = useState(null);
  
  const windowSize = useGetWindowSize();

  // a lot of the post titles are super long gibberish, I found that annoying and added this
  const reformatPosts = (posts) => {
    return posts.map(p => {
      let newTitle = p.title.split(" ");
      if (newTitle.length > 4) { 
        newTitle = newTitle.slice(0,3).join(" ")
      }
      else {
        newTitle = newTitle.join(" ");
      } 
      return ({...p, title: newTitle});
    });
    
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
 
    switch(parseInt(rootView)) {
      case 0: return <UserList /> 
      case 1: return <Wall />
      // case 2: return <UserDetails profile={[]} />
      // case 3: return <PostDetails post={[]} />
      default: return <div>Error</div>
    }
  }

  // console.log('src/App.js: loadingUsers is ', loadingUsers);

  const handleSelectRootView = (v) => {
    dispatch({ type: 'SET_ROOT_VIEW', rootView: v });
  }

  return(
    <div className="dashboard">
      { windowSize.width > 900 ?
        <Sidebar />
        :
        <></>
      }
      <div className="dashboard-inner">
        <Topbar value={rootView} handleSelect={handleSelectRootView} />
        <div className="dashboard-component-container">
          {/* { loadingPosts || loadingUsers ?  */}
          {/* { posts.length === 0 || users.length === 0 ? 
            <LoadingDiv />
            :
            renderSwitch()
          } */}
          {renderSwitch()}
        </div>
      </div>
    </div>
  )
}