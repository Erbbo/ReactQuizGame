/** @jsx React.DOM */
(function () {
	'use strict';

	var Quiz = React.createClass({
		render: function() {
			return <div>
				<h1>{this.props.now}</h1>
			</div>
		}
	});

	React.render(<Quiz now={new Date().toString()}/>, 
		document.getElementById('app'));

})();