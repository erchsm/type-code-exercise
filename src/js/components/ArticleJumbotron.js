import React, { Component, PropTypes } from 'react';

import classNames from "classnames";

import ArticleButton from './ArticleButton';
import EditableTitle from './EditableTitle';

export default class ArticleJumbotron extends Component {

	constructor() {
		super();

		this.state = {
		};
	}

	render() {
		const classnames = classNames({
			'grid': true,
			'article-jumbotron': true
		});	

		return (
			<section className={classnames}>
				<div className="grid__item grid__item--col-1 grid__item--hide-bp-small"></div>
				<div className="grid__item grid__item--col-5 grid__item--col-8-small">
					<EditableTitle/>
				</div>
			</section>
		)
	}
}