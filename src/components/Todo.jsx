var React = require('react');
var Button = require('react-bootstrap').Button;

var Todo = React.createClass({

  propTypes: {
    removeTodo: React.PropTypes.func,
    completeTodo: React.PropTypes.func,
    i: React.PropTypes.number,
    todo: React.PropTypes.shape({
      title: React.PropTypes.string,
      complete: React.PropTypes.bool
    })
  },

  render: function render() {
    return (
      <div>
        <i
          className="fa fa-minus-square-o"
          aria-hidden="true"
          onClick={function removeTodo() { this.props.removeTodo(this.props.i); }.bind(this)}
        />
        {' '}
        <Button
          disabled={this.props.todo.complete}
          bsSize="large"
          bsStyle="link"
          onClick={function completeTodo() { this.props.completeTodo(this.props.i); }.bind(this)}
        >
          {this.props.todo.title}
        </Button>
      </div>
    );
  }

});

module.exports = Todo;
