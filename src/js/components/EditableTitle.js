import React, { Component, PropTypes } from 'react';

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

		// Fetch cached state from Local Storage. TODO replace with backend call.
		const cache = localStorage.getItem('cachedState');
	    
	    if (cache) {
			const cachedState = JSON.parse(cache);

			this.setState({
				titleText: cachedState.editingTitleText,
				editingTitleText: cachedState.editingTitleText
			});
	    }

		// How I would RESTfully fetch data from backend
		// -----------------------------
		// fetch('//some-endpoint.com')
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(data => {
		// 		this.setState({ 
		// 			titleText: titleText,
		// 			editingTitleText: editingTitleText
		// 		})
		// 	})
		// 	.catch(error => {
		// 		console.error(error);
		// 	});
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

		// Post Data to Local Storage to Persist. TODO replace with backend call.
	    localStorage.setItem('cachedState', JSON.stringify(this.state));


		// How I would RESTfully post data to a backend
		// -----------------------------
		// fetch('//some-endpoint.com', {method: 'post', body: JSON.stringify(this.state)})
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(data => {
		// 		this.setState({ 
		// 			titleText: titleText,
		// 			editingTitleText: editingTitleText
		// 		})
		// 	})
		// 	.catch(error => {
		// 		console.error(error);
		// 	});
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

		const titleSplit = this.splitText(titleText);

		const title = titleSplit.map((item, index) =>
			<span key={index}>
				{item}
				{(index != titleSplit.length - 1) ? ' ' : null}
			</span>
		);

		const slugSplit = this.splitText(editingTitleText);

		// the regex below removes punctuation!
		const slug = slugSplit.map((item, index) =>
			<span key={index}>
				{item.toLowerCase().replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s{2,}/g," ")}
				{(index != slugSplit.length - 1) ? '-' : ''}
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
							<h4>slug:</h4><h4>{slug}</h4>
						</div>
					</div>
				</div>
			</div>
		)
	}
}