var React = require('react');
var Button = require('react-bootstrap').Button;

var Todo = React.createClass({
  render: function() {
    var completeTodo = this.props.completeTodo;
    var removeTodo = this.props.removeTodo;
    var i = this.props.i;
    return (
      <div>
        <i className="fa fa-minus-square-o" aria-hidden="true" onClick={function() {removeTodo(i)}} />
        {' '}
        <Button
          disabled={this.props.todo.complete}
          bsSize="large"
          bsStyle="link"
          onClick={function() {completeTodo(i)}}
        >
          {this.props.todo.title}
        </Button>
      </div>
    );
  }
});

module.exports = Todo;
