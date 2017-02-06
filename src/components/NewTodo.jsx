var React = require('react');
var Form = require('react-bootstrap').Form;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;

var NewTodo = React.createClass({

  propTypes: {
    addNewTodo: React.PropTypes.func,
    inputValue: React.PropTypes.string,
    onChange: React.PropTypes.func,
  },

  render: function render() {
    var size = {width: 400 + 'px', margin: 5 + 'px'};
    return (
      <Form inline style={size} onSubmit={this.props.addNewTodo}>
        <FormGroup>
          <FormControl
            bsSize="large"
            type="text"
            placeholder="Enter text"
            value={this.props.inputValue}
            onChange={this.props.onChange}
          />
          {' '}
          <Button type="submit">
            Add New
          </Button>
        </FormGroup>
      </Form>
    );
  }

});

module.exports = NewTodo;
