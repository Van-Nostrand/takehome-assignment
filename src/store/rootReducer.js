import { initialState } from './initialState';
import { combineReducers } from 'redux';
import userlist from './userlist/reducer';
import wall from './wall/reducer';

function rootState(state = initialState, action) {
  switch(action.type) {
    case 'SET_ROOT_VIEW':
      return {
        ...state,
        rootView: action.rootView
      }
    default: return state;
  }
}

export default combineReducers({ rootState, userlist, wall });