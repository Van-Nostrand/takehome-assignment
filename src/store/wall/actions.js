export const loadPosts = () => {
  return dispatch => {
    dispatch({type: 'REQUESTING_POSTS'});
    fetchSomething('posts')
      .then(posts => dispatch({type: "LOAD_POSTS", posts}));
  }
}

export const setSelectedPostId = (selectedPostId) => {
  return dispatch => {
    dispatch({ type: 'SET_SELECTED_POST_ID', selectedPostId });
  }
}

export const setState = (newState) => {
  return dispatch => {
    dispatch({type: 'SET_STATE', payload: newState});
  }
}

export const setView = (view) => {
  return dispatch => {
    dispatch({ type: 'SET_VIEW', view });
  }
}