import React from 'react';

class Video extends React.Component {

	constructor() {
		super();
		this.state = {
			video: {
				id: 1,
				title:"Video 1" ,
				description:"Succulents beard stumptown brunch deep v biodiesel street art, pour-over banjo. Fixie keffiyeh chia, banjo whatever snackwave skateboard poke man bun man braid hammock pickled. Semiotics disrupt marfa migas kombucha, authentic activated charcoal microdosing readymade hell of edison bulb locavore.",
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

export default Video;
