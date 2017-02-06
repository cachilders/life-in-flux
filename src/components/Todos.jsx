var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var NewTodo = require('./NewTodo.jsx');
var Todo = require('./Todo.jsx');

var Todos = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {title: 'TODO ONE', complete: false, priority: false},
        {title: 'TODO TWO', complete: true, priority: false},
        {title: 'TODO THREE', complete: false, priority: false},
        {title: 'TODO FOUR', complete: false, priority: false}
      ],
      visibility: 'open'
    };
  },
  render: function() {
    return (
      <DropdownButton
        bsSize="large"
        title="todo"
        id="dropdown-size-large"
        bsStyle="success"
        className={this.state.visibility}
        noCaret
        block
      >
        <NewTodo />
        <MenuItem divider />
        {
          this.state.todos.map(function(todo, i) {
            return (
              <MenuItem key={todo.title + i}>
                <Todo todo={todo} />
              </MenuItem>
            );
          })
        }
      </DropdownButton>
    );
  }
});

module.exports = Todos;
