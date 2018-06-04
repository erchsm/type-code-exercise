import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class ArticleButton extends Component {

	static propTypes = {
	}

	constructor() {
		super();
	}

	render() {
		const { children, disabled, hidden, onClick } = this.props;	

		const classnames = classNames({
			'article-button': true,
			'article-button--disabled': disabled,
			'article-button--hidden': hidden
		});	

		return (
			<div className={classnames} onClick={onClick}>
	          {children}
			</div>
		)
	}
}