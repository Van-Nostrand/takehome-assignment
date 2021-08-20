import { initialState } from './initialState';

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'REQUESTING_USERS': 
      return {
        ...state, 
        loadingUsers: true 
      }
    case 'LOAD_USERS':
      return { 
        ...state, 
        users: action.users,
        loadingUsers: false
      }
    case 'REQUESTING_POSTS':
      return { 
        ...state, 
        loadingPosts: true,
      }
    case 'LOAD_POSTS':
      return {
        ...state,
        posts: action.posts,
        loadingPosts: false
      }
    case 'BASIC_SET_STATE':
      return {
        ...state,
        ...action.payload
      }
    default: return state;
  }
}

export default rootReducer;