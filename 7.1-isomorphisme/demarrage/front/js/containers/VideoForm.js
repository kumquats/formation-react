import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postVideo } from '../actions';

function mapStateToProps( state )
{
	return { isLoading: state.newVideo.isLoading };
}
function mapDispatchToProps( dispatch )
{
    return bindActionCreators( {postVideo}, dispatch );
}

class VideoForm extends React.Component {
	constructor( props ) {
		super( props );
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
				<button type="submit" className="btn btn-default" disabled={this.props.isLoading}>
				  {!this.props.isLoading ? 'Ajouter' : 'Enregistrement...'}
				</button>
			</form>
		);
	}

	handleSubmit( event ) {
		event.preventDefault();
		const video = {
			title: this.titleInput.value,
			description: this.descriptionInput.value,
			file: this.fileInput.files[0],
		};
		this.props.postVideo(video);
	}

}

export default connect( mapStateToProps, mapDispatchToProps )( VideoForm );