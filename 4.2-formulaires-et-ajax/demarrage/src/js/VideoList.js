import React from 'react';
import VideoItem from './VideoItem';
import videos from './videos';

export default class VideoList extends React.Component {

	constructor(){
		super();
		this.state = {
			videos
		}
	}

	render () {
		return (
			<div className="row marketing">
				<div className="col-lg-12">
					<ul className="media-list">
						{ this.renderVideos() }
					</ul>
				</div>
			</div>
		);
	}

	renderVideos() {
		return this.state.videos.map( ( video ) => {
			return (
				<VideoItem key={video.id} video={video} />
			);
		});
	}

}