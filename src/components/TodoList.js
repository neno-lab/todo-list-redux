import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, editTodo } from '../redux/actions/toDoActions';

const TodoList = ({ todo, deleteTodo, editTodo }) => {
  return (
    <>
      <div>
        <div>{todo.title}</div>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button onClick={() => editTodo(todo.id)}>Edit</button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    editTodo: bindActionCreators(editTodo, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(TodoList);
