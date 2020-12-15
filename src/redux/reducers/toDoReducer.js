import {
  CREATE_NEW_TODO,
  DELETE_TODO,
  EDIT_TODO,
  HANDLE_INPUT_FIELD,
  UPDATE_TODO,
} from '../actions/toDoTypes';

const initialState = {
  inputField: '',
  todos: [],
  selectedID: undefined,
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case HANDLE_INPUT_FIELD:
      return { ...state, inputField: action.payload };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case EDIT_TODO:
      // console.log('edit: ', state.todos[action.payload]);
      // console.log('id: ', action.payload);
      // console.log('todos: ', state.todos);
      const item = state.todos.find((item) => item.id === action.payload);
      // console.log(item);
      return { ...state, inputField: item.title, selectedID: action.payload };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id !== action.payload.selectedID ? item : action.payload
        ),
        selectedID: undefined,
      };

    default:
      return state;
  }
};

export { toDoReducer };
