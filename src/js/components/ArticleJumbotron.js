import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class ArticleJumbotron extends Component {

	static propTypes = {
		title: PropTypes.string,
		type: PropTypes.string,
		data: PropTypes.number,
		body: PropTypes.string	
	}

	constructor() {
		super();

		this.state = {
		};
	}

	componentDidMount = () => {
		// fetch('//endpoint.com')
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(data => {
		// 		this.setState({ 
		// 		})
		// 	})
		// 	.catch(error => {
		// 		console.error(error);
		// 	});
	}

	render() {
		const { title, type, data, body } = this.props;	

		const classnames = classNames({
			'grid': true,
			'article-jumbotron': true
		});	

		return (
			<section className={classnames}>
				<div className="grid__item grid__item--col-1 grid__item--hide-bp-small"></div>
				<div className="grid__item grid__item--col-5">
					<h1>Are we out of the woods yet?</h1>
				</div>
			</section>
		)
	}
}