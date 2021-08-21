import React from 'react';

const INITIAL_STATE = {
  users: []
}

const AppContext = React.createContext();

function appReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'load_users': {
      return { users: action.users }
    }
    default: throw new Error(`unhandled action ${action.type}`);
  }
}

function AppProvider({ children }) {
  const [ state, dispatch ] = React.useReducer(appReducer);

  const value = { state, dispatch }; // consider memoizing value
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppState() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a provider");
  }
  return context
}

export { AppProvider, useAppState } ;