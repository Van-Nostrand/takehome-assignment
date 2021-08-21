// import { fetchSomething } from '../../constants/apiCalls';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchSomething(thing) {
  return await fetch(`${ROOT_URL}/${thing}`).then(res => res.json());
}

export const setFilteredUsers = (filteredUsers) => {
  return dispatch => {
    dispatch({ type: "SET_FILTERED_USERS", filteredUsers });
  }
}

export const setSearchTerm = (searchTerm) => {
  return dispatch => {
    dispatch({ type: 'SET_SEARCH_TERM', searchTerm });
  }
}

export const setSortingMethod = (sortingMethod) => {
  return dispatch => {
    dispatch({ type: 'SET_SORTING_METHOD', sortingMethod });
  }
}

export const loadUsers = () => {
  return dispatch => {
    dispatch({type: 'REQUESTING_USERS'});
    fetchSomething('users')
      .then(users => dispatch({type: 'LOAD_USERS', users, loadingUsers: false }));
  }
}

export const setUpUserList = () => {
  return dispatch => {
    Promise.all([
      dispatch({ type: 'REQUESTING_USERS '}),
      fetchSomething('users')
    ]).then(([d, users]) => {
      console.log('src/store/userlist/actions.js: users is ', users);
      dispatch({ type: 'SET_USERLIST_STATE', payload: { users: users, filteredUsers: users, loadingUsers: false }})
    });
  }
}

export const setSelectedUserId = (selectedUserId) => {
  return dispatch => {
    dispatch({ type: 'SET_SELECTED_USER_ID', selectedUserId, view: 2 });
  }
}

export const basicSetState = (newState) => {
  return dispatch => {
    dispatch({type: 'BASIC_SET_STATE', payload: newState});
  }
}