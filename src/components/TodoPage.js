import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createNewTodo,
  handleInputField,
  updateTodo,
} from '../redux/actions/toDoActions';
import TodoList from './TodoList';

class TodoPage extends React.Component {
  onChange = (e) => {
    this.props.handleInputField(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.props.selectedID || this.props.selectedID === 0) {
      this.props.updateTodo({
        title: this.props.inputField,
        selectedID: this.props.selectedID,
      });
    } else {
      this.props.createNewTodo({
        id: Math.random().toString(36).substr(2, 9),
        title: this.props.inputField,
      });
    }

    this.props.handleInputField('');
  };

  render() {
    return (
      <>
        <h2>Todo Redux</h2>
        <h3>Add Todos</h3>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type='text'
            placeholder='Add Todo...'
            value={this.props.inputField}
          />
        </form>

        {this.props.todos.map((todo) => (
          <TodoList key={Math.random().toString(36).substr(2, 9)} todo={todo} />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.toDoReducer);
  return {
    inputField: state.toDoReducer.inputField,
    todos: state.toDoReducer.todos,
    selectedID: state.toDoReducer.selectedID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputField: bindActionCreators(handleInputField, dispatch),
    createNewTodo: bindActionCreators(createNewTodo, dispatch),
    updateTodo: bindActionCreators(updateTodo, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
