var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var NewTodo = require('./NewTodo.jsx');
var Todo = require('./Todo.jsx');

var Todos = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {title: 'A thing well done', complete: false, priority: false},
        {title: 'A thing done well', complete: false, priority: false}
      ],
      isOpen: 'true',
      inputValue: ''
    };
  },

  toggleDropdown: function() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },

  handleChange: function(e) {
    this.setState({
      inputValue: e.target.value
    });
  },

  addNewTodo: function(e) {
    e.preventDefault();
    console.log(e)
    this.setState({
      todos: this.state.todos.concat({
        title: this.state.inputValue, complete: false, priority: false
      }),
      inputValue: ''
    });
  },

  completeTodo: function(i) {
    var newTodos = this.state.todos.slice();
    newTodos[i].complete = !newTodos[i].complete;
    this.setState({
      todos: newTodos
    });
  },

  removeTodo: function(i) {
    var newTodos = this.state.todos.slice(0, i).concat(this.state.todos.slice(i + 1));
    this.setState({
      todos: newTodos
    });
  },

  render: function() {
    var removeTodo = this.removeTodo;
    var completeTodo = this.completeTodo;
    return (
      <DropdownButton
        bsSize="large"
        title="todo"
        id="dropdown-size-large"
        bsStyle="success"
        open={this.state.isOpen}
        onToggle={this.toggleDropdown}
        noCaret
        block
      >
        <NewTodo addNewTodo={this.addNewTodo} inputValue={this.state.inputValue} onChange={this.handleChange} />
        <MenuItem divider />
        {
          this.state.todos.map(function(todo, i) {
            return (
              <MenuItem key={todo.title + i}>
                <Todo todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} i={i} />
              </MenuItem>
            );
          })
        }
      </DropdownButton>
    );
  }
});

module.exports = Todos;
