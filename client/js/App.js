

var React = require('react');

/**
 * Using React 0.13.2
 *
 * - 2015-04-28: Update from React 0.12 to 0.13.2
 * - 2015-04-14: Load all assets over SSL
 */

var Tab = React.createClass({
 

  handleClick: function(event) {
    event.preventDefault();
    this.props.onSelect(this.props.uid);
  },

  onSelect:function(event){
  	console.log(event)

  },

  render: function() {
 
  
    return (
      <li >
        <a href={"#" + this.props.uid} onClick={this.handleClick}>
          {this.props.uid}
        </a>
      </li>
    );
  }
});




	
module.exports = Tab;
	
