import './App.css';
import React, { Component } from 'react';
import Post from './Post';
import posts from './posts';

class App extends Component {
	// 'controlled form' state 
	state = {
		title: '',
		author: '',
		body: '',
		comments: []
	}

	handleSubmit = e => {
		// prevent default behavior of the synthetic form submission event
		e.preventDefault()
		posts.push(this.state) // imitate axios 
		// reset state to trigger a re-render
		this.setState({
			title: '',
			author: '',
			body: '',
			comment: []
		})
	}

	handleTextChange = (e) => {
		// make this function another input
		const updatedInput = { [e.target.name]: e.target.value }
		// console.log(updatedInput)
		console.log('coming from here:', updatedInput)
		this.setState({...updatedInput}, () => console.log(this.state))
		// input change synthatic event
		// do not need the prev value in a controlled form 
		// triggers a rerender on every key press 
		// this.setState({
		// 	body: e.target.value
		// }, () => console.log(this.state))
	}

	render() {
		const postComponents = posts.map((post, index) => {
			return (
				<Post
					key={`Post-${index}`}
					title={post.title}
					author={post.author}
					body={post.body}
					comments={post.comments}
				/>
			)
		})


    return (
      <>
				{postComponents}

				<form onSubmit={this.handleSubmit}>
				<label htmlFor="author-name">Name:</label>
					<input
						type="text"
						name="author"
						onChange={this.handleTextChange}
						value={this.state.author}
						id="autho-name"
					/>

					<label htmlFor="title">Post: Title</label>
					<input
						type="text"
						id='title'
						placeholder='Enter title'
						name='title'
						onChange={this.handleTextChange}
						value={this.state.value}
					/>

					<label htmlFor='body'>Post:</label>
					<textarea
						id='body'
						// need some stuff for the controlled ?
						// step 1 add am event 
						onChange={this.handleTextChange}

						value={this.state.body}
						name="body"
					>

					</textarea>
					<input type="submit" />
				</form>
      </>
      );
	}
}

export default App;
