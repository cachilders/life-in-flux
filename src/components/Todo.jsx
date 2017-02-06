var React = require('react');
var Button = require('react-bootstrap').Button;

var Todo = React.createClass({
  render: function() {
    return (
      <div>
        <i className="fa fa-minus-square-o" aria-hidden="true" />
        {' '}
        <Button disabled={this.props.todo.complete} bsSize="small" bsStyle="link">
          {this.props.todo.title}
        </Button>
      </div>
    );
  }
});

module.exports = Todo;
