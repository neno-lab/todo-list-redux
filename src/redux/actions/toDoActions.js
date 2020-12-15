import {
  CREATE_NEW_TODO,
  HANDLE_INPUT_FIELD,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from './toDoTypes';

export const createNewTodo = (todo) => {
  return {
    type: CREATE_NEW_TODO,
    payload: todo,
  };
};

export const handleInputField = (inputField) => {
  return {
    type: HANDLE_INPUT_FIELD,
    payload: inputField,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id,
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
