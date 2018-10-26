import React from 'react';

export default class VideoList extends React.Component {

	constructor(){
		super();
		this.state = {
			videos: [
				{
					id: 1,
					title:'Le Top 10 des framework JS',
					description:'Vous n\'en croirez pas vos yeux',
					file: 'video1.mp4'
				},
				{
					id: 2,
					title:'5 bonnes raisons de ne pas fuir cette formation',
					description:'Vous allez halluciner ! Cliquez vite !',
					file: 'video2.mp4'
				},
				{
					id: 3,
					title:'Les plus grands secrets des développeurs React',
					description:'Cliquez et découvrez avant les autres ces astuces incroyables !',
					file: 'video3.mp4'
				},
				{
					id: 4,
					title:'Votre DSI ne veut pas que vous voyiez cette vidéo !',
					description:'Les experts sont formels : cette méthode de développement mystérieuse va changer votre vie.',
					file: 'video1.mp4'
				},
				{
					id: 5,
					title:'Les gens vous supplieront de développer leur appli !',
					description:'Visionnez cette vidéo au plus vite et apprenez les 1022 méthodes de développement les plus rentables.',
					file: 'video2.mp4'
				},
				{
					id: 6,
					title:'Les 12 techniques imparables pour rater un café' ,
					description:'Vous en avez marre de tout réussir ? Ratez aux moins les cafés grâce à cette vidéo inédite !',
					file: 'video3.mp4'
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
		return this.state.videos.map( video => (
			<li key={video.id} className="media">
				<div className="media-left">
				<img className="media-object"
					alt="cat" src={'http://placeimg.com/246/138/animals?r='+video.id}
					width="246"
					height="138" />
				</div>
				<div className="media-body">
					<h4 className="media-heading">{video.title}</h4>
					<p>{video.description}</p>
				</div>
			</li>
		) );
	}

}