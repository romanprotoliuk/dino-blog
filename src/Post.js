import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
	render() {
		const commentParagraphs = this.props.comments.map((c, i) => {
			return <Comment key={`Comment-${i}`} content={c} />;
		});
		return (
			<article>
				<h1>{this.props.title}</h1>
				<h2>{this.props.author}</h2>
				<p> {this.props.body} </p>
				<hr />
				<h3>Comments:</h3>
				{commentParagraphs}
			</article>
		);
	}
}

export default Post;
