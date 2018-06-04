import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

import ArticleButton from './ArticleButton';
import EditableTitle from './EditableTitle';

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
		const classnames = classNames({
			'grid': true,
			'article-jumbotron': true
		});	

		return (
			<section className={classnames}>
				<div className="grid__item grid__item--col-1 grid__item--hide-bp-small"></div>
				<div className="grid__item grid__item--col-5">
					<EditableTitle/>
				</div>
			</section>
		)
	}
}