import React from 'react';
import request from 'superagent';
import config from 'config';


class Video extends React.Component {

	constructor() {
		super();
		this.id = 2;
		this.state = {
			video: null,
			comments: [],
			newComment: '',
			newCommentLoading: false,
		};
		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleCommentInputChange = this.handleCommentInputChange.bind( this );
	}

	componentWillMount(){
		request
			.get( `${config.apiPath}/videos/${this.id}` )
			.then(
				( response ) => {
					this.setState( { video: response.body } );
				}
			);
		this.fetchComments();
	}

	fetchComments(){
		request
			.get( `${config.apiPath}/videos/${this.id}/comments` )
			.then(
				( response ) => {
					this.setState( { comments: response.body } );
				}
			)
	}

	componentDidUpdate(prevProps, prevState){
		if (this.state.video && (!prevState.video || prevState.video.id != this.state.video.id ) ) {
			this.playVideo();
		}
	}

	playVideo() {
		if ( this.video ) {
			this.video.play();
		}
	}

	render() {
		return (
			<div className="row marketing">
				<div className="col-sm-12 col-md-12">
					<div className="thumbnail">
						<div className="caption">
							<video
								style={{ width: '100%', backgroundColor: 'black' }}
								ref={el => this.video = el}
								height="300"
								controls
								src={this.state.video && './uploads/' + this.state.video.file}
							>
							</video>
							<h3>{this.state.video ? this.state.video.title : 'Chargement en cours'}</h3>
							<p>{this.state.video && this.state.video.description}</p>
						</div>
						<form onSubmit={this.handleSubmit}>
						  <div className="form-group">
							<label htmlFor="content">Ajouter un commentaire</label>
							<textarea
								className="form-control"
								value={this.state.newComment}
								onChange={this.handleCommentInputChange}
								name="content"
								id="content"
								cols="30"
								rows="2"
								disabled={this.state.newCommentLoading}
							/>
						  </div>
						  <button type="submit" className="btn btn-default" disabled={this.state.newCommentLoading}>
							{!this.state.newCommentLoading ? 'Envoyer' : 'Envoi en cours...'}
						  </button>
						</form>
						<div>
							<h4>Commentaires: </h4>
							{ this.renderComments() }
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderComments(){
		return this.state.comments.map(( comment ) => {
			return (
				<div key={comment.id} className="panel panel-default">
				  <div className="panel-body">
					<h6><small>Le {(new Date(comment.created_at)).toLocaleString()}</small></h6>
					{comment.content}
				  </div>
				</div>
			);
		});
	}

	handleCommentInputChange( event ) {
		this.setState({newComment : event.target.value});
	}

	handleSubmit( event ) {
		event.preventDefault();
		this.setState({newCommentLoading: true});
		request
			.post( `${config.apiPath}/videos/${this.state.video.id}/comments` )
			.send( 'content=' + encodeURIComponent( this.state.newComment ) )
			.then(
				( response ) => {
					this.setState({newCommentLoading: false, newComment: ''});
					this.fetchComments();
				}
			);
	}

}

export default Video;
