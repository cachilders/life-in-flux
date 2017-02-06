var React = require('react');
var Form = require('react-bootstrap').Form;
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;

var NewTodo = React.createClass({
  render: function() {
    var size = {width: 400 + 'px', margin: 5 + 'px'};
    return (
      <Form inline style={size}>
        <FormGroup>
          <FormControl
            bsSize="large"
            type="text"
            placeholder="Enter text"
          />
          {' '}
          <Button>
            Add New
          </Button>
        </FormGroup>
      </Form>
    );
  }
});

module.exports = NewTodo;
