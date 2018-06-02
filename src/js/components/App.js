import React, { Component, PropTypes } from 'react';

import ArticleHeader from './ArticleHeader';
import ArticleJumbotron from './ArticleJumbotron';
import ArticleBody from './ArticleBody';

export default class App extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<article>
				<ArticleHeader/>
				<ArticleJumbotron/>
				<ArticleBody/>
			</article>
		)
	}
}