import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = props => (
	<li className="media">
		<a href="#">
			<div className="media-left">
				<img className="media-object"
					alt="cat" src={'./uploads/thumbnails/'+props.video.thumbnail}
					width="246"
					height="138" />
			</div>
			<div className="media-body">
				<h4 className="media-heading">{props.video.title}</h4>
				<p>{props.video.description}</p>
			</div>
		</a>
	</li>
);
VideoItem.propTypes = {
	video: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		thumbnail: PropTypes.string.isRequired
	}).isRequired
}

export default VideoItem;