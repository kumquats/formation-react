import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VideoItem from '../components/VideoItem';
import { fetchVideos } from '../actions';

// Dans cette fonction on récupère le state en paramètre
function mapStateToProps( state )
{
	return { videos: state.videos };
}
// Dans cette fonction on récupère la méthode dispatch du store
function mapDispatchToProps( dispatch )
{
    // on associe this.props.fetchVideos avec l'action creator fetchVideos
    // return {
    //     fetchVideos: () => dispatch( fetchVideos() )
    // };
    // peut se simplifier avec la méthode bindActionCreators
    return bindActionCreators( {fetchVideos}, dispatch );
}

class VideoList extends React.Component {

	componentDidMount(){
		this.props.fetchVideos();
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
		return this.props.videos.map( ( video ) => {
			return <VideoItem key={video.id} video={video} />;
		});
	}
}

export default connect(mapStateToProps, mapDispatchToProps)( VideoList );