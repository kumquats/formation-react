import React from 'react';

export default function VideoItem( props ) {
	return (
		<li className="media">
			<a href="#">
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
			</a>
		</li>
	)
}