import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const VideoItem = props => (
	<li className="media">
		<Link to={`/videos/${props.video.id}`}>
			<div className="media-left">
				<img className="media-object"
					alt="cat" src={'http://lorempixel.com/120/70/cats/?r='+Math.random()}
					width="120"
					height="70" />
			</div>
			<div className="media-body">
				<h4 className="media-heading">{props.video.title}</h4>
				<p>{props.video.description}</p>
			</div>
		</Link>
	</li>
);
VideoItem.propTypes = {
	// La prop color doit être une string
	video: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		description: PropTypes.string,
	}).isRequired
}

export default VideoItem;