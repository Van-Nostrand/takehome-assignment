import { initialState } from './initialState';

export default function userlist(state = initialState, action) {
  switch(action.type){
    case 'LOAD_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SET_FILTERED_USERS':
      return { 
        ...state, 
        filteredUsers: action.filteredUsers 
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case 'SET_SORTING_METHOD':
      return {
        ...state,
        sortingMethod: action.sortingMethod
      }
    case 'SET_USERLIST_STATE':
      return {
        ...state,
        ...action.payload
      }
    default: return state;
  }
}