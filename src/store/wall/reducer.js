import { initialState } from './initialState';

export default function wall(state = initialState, action) {
  switch(action.type){
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
    case 'SET_SELECTED_POST_ID':
      return {
        ...state,
        selectedPostId: action.selectedPostId
      }
    case 'SET_VIEW':
      return {
        ...state,
        view: action.view
      }
    case 'SET_STATE':
      return {
        ...state,
        ...action.payload
      }
    default: return state;
  }
}