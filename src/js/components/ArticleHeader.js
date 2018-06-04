import React, { Component, PropTypes } from 'react';

import classNames from "classnames";

export default class ArticleHeader extends Component {

	constructor() {
		super();
	}

	render() {
		const { charts } = this.props;

		const classnames = classNames({
			'grid': true,
			'article-header': true
		});

		return (
			<header className={classnames}>
				<div className="grid__item grid__item--col-2">
					<i className="iconcss icon-logo"></i>
					<i className="iconcss icon-hamburger"></i>
				</div>
			</header>
		)
	}
}