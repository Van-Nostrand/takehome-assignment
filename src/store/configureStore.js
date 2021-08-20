import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import {loadUsersAndPosts} from './actions';

const { NODE_ENV } = process.env;

export default () => {
  const store = createStore(
    rootReducer,
    NODE_ENV === 'development' ? 
      composeWithDevTools(applyMiddleware(thunkMiddleware))
      :
      applyMiddleware(thunkMiddleware)
  )
  store.dispatch(loadUsersAndPosts());
  return store;
}