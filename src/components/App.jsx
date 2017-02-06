var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;

var Todos = require('./Todos.jsx');

var App = React.createClass({

  render: function render() {
    return (
      <div className="container">
        <Jumbotron bsClass="default">
          <h3>Yet another {' '} <Todos /> {' '} app.</h3>
        </Jumbotron>
      </div>
    );
  }

});

module.exports = App;
