import React from 'react';
import request from 'superagent';
import config from 'config';


class VideoForm extends React.Component {

	constructor(){
		super();
		this.state = {
			isLoading: false,
		}
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
			  <div className="form-group">
				<label htmlFor="title">Titre</label>
				<input
					required
					type="text"
					className="form-control"
					id="title"
					ref={el => this.titleInput = el} />
			  </div>
			  <div className="form-group">
				<label htmlFor="description">Description</label>
				<textarea
					required
					className="form-control"
					name="description"
					id="description"
					ref={el => this.descriptionInput = el}
					cols="30"
					rows="10"></textarea>
			  </div>
			  <div className="form-group">
				<label htmlFor="file">Video</label>
				<input
					required
					type="file"
					id="file"
					ref={el => this.fileInput = el} />
			  </div>
				<button type="submit" className="btn btn-default" disabled={this.state.isLoading}>
				  {!this.state.isLoading ? 'Ajouter' : 'Enregistrement...'}
				</button>
			</form>
		);
	}

	handleSubmit( event ) {
		event.preventDefault();
		this.setState({isLoading: true});
		request
			.post( `${config.apiPath}/videos` )
			.field('title', this.titleInput.value)
			.field('description', this.descriptionInput.value)
			.attach('file', this.fileInput.files[0])
			.then(
				( response ) => {
					this.setState({isLoading: false});
				}
			);
	}

}

export default VideoForm;