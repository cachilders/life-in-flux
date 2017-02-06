var React = require('react');
var Form = require('react-bootstrap').Form;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;

var NewTodo = React.createClass({
  render: function() {
    var size = {width: 400 + 'px', margin: 5 + 'px'};
    var addNewTodo = this.props.addNewTodo;
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
