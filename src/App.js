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
  Users,
  Wall,
  UserDetails,
  PostDetails
} from './views';
import { 
  fetchSomething
} from './functions/apiCalls';

import { AppProvider } from './AppProvider';
import { useGetWindowSize } from './hooks/useGetWindowSize';

export default function App() {

  const [ view, setView ] = useState(0);
  const [ selectedPostId, setSelectedPostId ] = useState(null);
  
  const windowSize = useGetWindowSize();

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
      case 0: return <Users selectUser={selectUser} /> 
      // case 1: return <Wall selectPost={selectPost} />
      default: return <div>Error</div>
    }
  }

  return(
    <AppProvider>
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
    </AppProvider>
  )
}