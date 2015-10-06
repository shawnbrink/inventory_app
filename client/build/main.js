(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/sb/projects/hidinventory/client/js/App.js":[function(require,module,exports){


var React = require('react');

/**
 * Using React 0.13.2
 *
 * - 2015-04-28: Update from React 0.12 to 0.13.2
 * - 2015-04-14: Load all assets over SSL
 */

var Tab = React.createClass({displayName: "Tab",
 

  handleClick: function(event) {
    event.preventDefault();
    this.props.onSelect(this.props.uid);
  },

  onSelect:function(event){
  	console.log(event)

  },

  render: function() {
 
  
    return (
      React.createElement("li", null, 
        React.createElement("a", {href: "#" + this.props.uid, onClick: this.handleClick}, 
          this.props.uid
        )
      )
    );
  }
});




	
module.exports = Tab;
	

},{"react":"react"}],"/home/sb/projects/hidinventory/client/js/main.js":[function(require,module,exports){
var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.body);
},{"./App.js":"/home/sb/projects/hidinventory/client/js/App.js","react":"react"}]},{},["/home/sb/projects/hidinventory/client/js/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvanMvQXBwLmpzIiwiY2xpZW50L2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogVXNpbmcgUmVhY3QgMC4xMy4yXG4gKlxuICogLSAyMDE1LTA0LTI4OiBVcGRhdGUgZnJvbSBSZWFjdCAwLjEyIHRvIDAuMTMuMlxuICogLSAyMDE1LTA0LTE0OiBMb2FkIGFsbCBhc3NldHMgb3ZlciBTU0xcbiAqL1xuXG52YXIgVGFiID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRhYlwiLFxuIFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLnVpZCk7XG4gIH0sXG5cbiAgb25TZWxlY3Q6ZnVuY3Rpb24oZXZlbnQpe1xuICBcdGNvbnNvbGUubG9nKGV2ZW50KVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiBcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wiICsgdGhpcy5wcm9wcy51aWQsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2t9LCBcbiAgICAgICAgICB0aGlzLnByb3BzLnVpZFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG5cblx0XG5tb2R1bGUuZXhwb3J0cyA9IFRhYjtcblx0XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyk7XG5SZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5ib2R5KTsiXX0=
