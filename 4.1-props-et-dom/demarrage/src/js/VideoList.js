import React from 'react';

class VideoList extends React.Component {

	constructor(){
		super();
		this.state = {
			videos: [
				{
					id: 1,
					title:"Video 1" ,
					description:"Succulents beard stumptown brunch deep v biodiesel street art, pour-over banjo. Fixie keffiyeh chia, banjo whatever snackwave skateboard poke man bun man braid hammock pickled. Semiotics disrupt marfa migas kombucha, authentic activated charcoal microdosing readymade hell of edison bulb locavore.",
					file: "video1.mp4"
				},
				{
					id: 2,
					title:"Video 2" ,
					description:"Mlkshk copper mug humblebrag hashtag, messenger bag 3 wolf moon woke. Helvetica skateboard blog, flexitarian street art cornhole truffaut listicle blue bottle 90's yuccie mustache. ",
					file: "video2.mp4"
				},
				{
					id: 3,
					title:"Video 3" ,
					description:"Whatever intelligentsia vape, microdosing butcher VHS chillwave williamsburg brunch vaporware hella drinking vinegar raclette tilde.",
					file: "video3.mp4"
				},
				{
					id: 4,
					title:"Video 4" ,
					description:"90's typewriter lo-fi slow-carb farm-to-table, tofu forage pabst salvia affogato artisan vice humblebrag four loko everyday carry.",
					file: "video4.mp4"
				},
				{
					id: 5,
					title:"Video 5" ,
					description:"Disrupt cred schlitz, crucifix pabst hashtag vaporware vape glossier brunch keytar. Jean shorts ramps fingerstache PBR&B, fap af typewriter pinterest beard umami. Humblebrag celiac lo-fi",
					file: "video5.mp4"
				}
			],
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
				<li key={video.id} className="media">
					<div className="media-left">
						<img className="media-object"
							alt="cat" src={'https://loremflickr.com/320/240/cat?r='+Math.random()}
							width="120"
							height="70" />
					</div>
					<div className="media-body">
						<h4 className="media-heading">{video.title}</h4>
						<p>{video.description}</p>
					</div>
				</li>
			);
		});
	}

}

export default VideoList;