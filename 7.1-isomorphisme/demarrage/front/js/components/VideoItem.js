import React from 'react';
import { Link } from 'react-router';

export default function VideoItem( props ) {
	return (
		<li className="media">
			<Link to={`/videos/${props.video.id}`}>
				<div className="media-left">
					<img className="media-object"
						alt="cat" src={'http://lorempixel.com/120/70/cats?r='+Math.random()}
						width="120"
						height="70" />
				</div>
				<div className="media-body">
					<h4 className="media-heading">{props.video.title}</h4>
					<p>{props.video.description}</p>
				</div>
			</Link>
		</li>
	)
}