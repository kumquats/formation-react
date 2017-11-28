import React from 'react';
import request from 'superagent';
import config from 'config';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

	constructor(){
		super();
		this.state = {
			videos: []
		}
	}

	componentWillMount(){
		request
			.get( `${config.apiPath}/videos` )
			.then(
				( response ) => {
					this.setState( { videos: response.body } );
				}
			)
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

export default VideoList;