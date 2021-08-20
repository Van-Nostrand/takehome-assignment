import { initialState } from './initialState';

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO': 
      return {
        ...state, 
        todos: [ ...state.todos, action.payload ], 
        inputText: '' 
      }
    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter(todo => todo.id !== action.id);
      return { 
        ...state, 
        todos: filteredTodos 
      }
    case 'CHANGE_INPUT_TEXT':
      return { 
        ...state, 
        inputText: action.val 
      }
    default: return state;
  }
}

export default rootReducer;