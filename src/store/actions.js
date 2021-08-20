import { fetchSomething } from '../constants/apiCalls';

export const loadUsers = () => {
  return dispatch => {
    dispatch({type: 'REQUESTING_USERS'});
    fetchSomething('users')
      .then(users => dispatch({type: 'LOAD_USERS', users }))
  }
}

export const loadPosts = () => {
  return dispatch => {
    dispatch({type: 'REQUESTING_POSTS'});
    fetchSomething('posts')
      .then(posts => dispatch({type: "LOAD_POSTS", posts}));
  }
}

export const loadUsersAndPosts = () => {
  return dispatch => {
    Promise.all([
      fetchSomething("users"),
      fetchSomething('posts')
    ]).then(([userData, postData]) => {
      dispatch({type: 'BASIC_SET_STATE', payload: {
        users: userData,
        posts: postData,
        loadingUsers: false,
        loadingPosts: false,  
      }})
    })
  }
}

export const basicSetState = (newState) => {
  return dispatch => {
    dispatch({type: 'BASIC_SET_STATE', payload: newState});
  }
}