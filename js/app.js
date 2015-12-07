/** @jsx React.DOM */
(function () {
	'use strict';

	var Quiz = React.createClass({
		propTypes: {
			data: React.PropTypes.array.isRequired
		},
		getInitialState: function () {
			return {
				author: this.props.data[0],
				books: this.props.data[0].books
			};
		},
		render: function () {
			return (<div>
				<div className="row">
					<div className="col-md-4">
						<img src={this.state.author.imageUrl} 
							className="authorimage col-md-3"/>
					</div>
					<div className="col-md-7">
						{this.state.books.map(function (b) {
							return <Book title={b} />
						}, this)}
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>);
		}
	});

	var Book = React.createClass({
		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		render: function() {
			return (
				<div className="answer">
					<h4>{this.props.title}</h4>
				</div>);
		}
	});

	var data = [ 
		{
			name: 'Some Image',
			imageUrl: 'photos/too-much-information.jpg',
			imageSource: 'IDK',
			books: ['Game Of Thrones: A Clash Of Kings', 
			'Game Of Thrones: A Feast For Crows']
		}
	];

	React.render(<Quiz data={data}/>, 
		document.getElementById('app'));

})();

