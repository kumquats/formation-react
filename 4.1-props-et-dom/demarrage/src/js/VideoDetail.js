import React from 'react';

export default class VideoDetail extends React.Component {

	constructor() {
		super();
		this.state = {
			video: {
				id: 1,
				title:'Le Top 10 des framework JS' ,
				description:'Vous n\'en croirez pas vos yeux',
				file: "video1.mp4"
			}
		};
	}

	render() {
		return (
			<div className="row marketing">
				<div className="col-sm-12 col-md-12">
					<div className="video-detail">
						<div className="caption">
							<video
								style={{ width: '100%', backgroundColor: 'black' }}
								height="300"
								controls
								src={
									this.state.video &&
									'./uploads/' + this.state.video.file
								}
							>
							</video>
							<h3>{this.state.video && this.state.video.title}</h3>
							<p>{this.state.video && this.state.video.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}