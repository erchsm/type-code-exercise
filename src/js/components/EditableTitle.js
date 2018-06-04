import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

import ArticleButton from './ArticleButton';

export default class EditableTitle extends Component {

	static propTypes = {
	}

	constructor() {
		super();

		this.state = {
			isEditing: false,
			titleText: 'Are we out of the woods yet?',
			editingTitleText: 'Are we out of the woods yet?'
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
		const cache = localStorage.getItem('data');
	    
	    if (cache) {
			console.log(cache);

			this.setState({
				titleText: JSON.parse(cache).editingTitleText,
				editingTitleText: JSON.parse(cache).editingTitleText
			});
	    }
	}

	handleEditingOnChange = (event) => {
	    this.setState({
	    	editingTitleText: event.target.value
	    });
	}

	toggleIsEditing = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
		setTimeout(() => {
			this.refs.editingTitleText.focus();
			this.refs.editingTitleText.setSelectionRange(this.state.editingTitleText.length, this.state.editingTitleText.length);
		}, 0);
	}

	handleEditingKeyPress = (event) => {
		if (event.charCode == 13 && this.state.editingTitleText.length > 0) {
			this.clickCheck();
		}
	}

	clickCheck = () => {
		this.setState({
			isEditing: false,
			titleText: this.state.editingTitleText
		});
	    localStorage.setItem('data', JSON.stringify(this.state));
	}

	clickCancel = () => {
		this.setState({
			isEditing: false,
			editingTitleText: this.state.titleText
		});
	}

	splitText = (text) => text.split(' ')


	render() {
		const { isEditing, titleText, editingTitleText } = this.state;	

		const classnames = classNames({
			'editable-title': true,
			'editable-title--is-editing': isEditing
		});	

		const title = this.splitText(titleText).map((item, index) =>
			<span key={index}>
				{item}
				{(index != this.splitText(titleText).length - 1) ? ' ' : null}
			</span>
		);

		// the regex below removes punctuation!
		const slug = this.splitText(editingTitleText).map((item, index) =>
			<span key={index}>
				{item.toLowerCase().replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s{2,}/g," ")}
				{(index != this.splitText(editingTitleText).length - 1) ? '-' : ''}
			</span>
		);

		return (
			<div className={classnames}>
				<div className="editable-title__controls">
					<ArticleButton onClick={this.toggleIsEditing} hidden={this.state.isEditing}>
						<i className="iconcss icon-pencil iconcss--yellow"></i>
					</ArticleButton>
					<ArticleButton onClick={this.clickCancel} hidden={!this.state.isEditing} >
						<i className="iconcss icon-close iconcss--red"></i>
					</ArticleButton>
					<ArticleButton onClick={this.clickCheck} hidden={!this.state.isEditing} disabled={this.state.editingTitleText.length == 0} >
						<i className="iconcss icon-check iconcss--green"></i>
					</ArticleButton>
				</div>
				<div className="editable-title__main">
					<h1>{title}</h1>
					<div className="editable-title__editor">
						<input ref='editingTitleText' type="text" value={editingTitleText} onChange={this.handleEditingOnChange} onKeyPress={this.handleEditingKeyPress}/>
						<div className="editable-title__slug">
							<h4>slug: </h4><h4>{slug}</h4>
						</div>
					</div>
				</div>
			</div>
		)
	}
}