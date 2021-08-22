import React, { useState } from "react";
import { 
  Topbar,
} from './components';

import {
  Users,
} from './views';

import { AppProvider } from './AppProvider';

export default function App() {

  const [ view, setView ] = useState(0);


  const renderSwitch = () => {
    switch(parseInt(view)) {
      case 0: return <Users /> 
      // case 1: return <Wall selectPost={selectPost} />
      default: return <div>Error</div>
    }
  }

  return(
    <AppProvider>
      <div className="dashboard">
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