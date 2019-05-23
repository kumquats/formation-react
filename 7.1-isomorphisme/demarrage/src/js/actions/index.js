import request from 'superagent';
import config from 'config';
import { push } from 'connected-react-router';

// Liste Vidéos
export const VIDEO_LIST_COMPLETE = 'VIDEO_LIST_COMPLETE';
// Ajout video
export const POST_VIDEO_LOADING = 'POST_VIDEO_LOADING';
export const POST_VIDEO_COMPLETE = 'POST_VIDEO_COMPLETE';
// détail vidéo
export const VIDEO_COMPLETE = 'VIDEO_COMPLETE';
// liste commentaires
export const COMMENT_LIST_COMPLETE = 'COMMENT_LIST_COMPLETE';
// ajout commentaire
export const POST_COMMENT_LOADING = 'POST_COMMENT_LOADING';
export const POST_COMMENT_COMPLETE = 'POST_COMMENT_COMPLETE';
export const COMMENT_INPUT = 'COMMENT_INPUT';



export function fetchVideos(){
	return (dispatch, getState) => {
		request
			.get( `${config.apiPath}/videos` )
			.then(
				( response ) => {
					dispatch({
						type: VIDEO_LIST_COMPLETE,
						videos: response.body
					});
				}
			);
	}
}

export function postVideo(video) {
	const {title, description, file} = video;
	return ( dispatch, getState ) => {
		dispatch( { type: POST_VIDEO_LOADING, video: video } );
		request
			.post( `${config.apiPath}/videos` )
			.field('title', title)
			.field('description', description)
			.attach('file', file)
			.then(
				( response ) => {
					dispatch( {
						type: POST_VIDEO_COMPLETE,
						video: response.body
					} );
					return response.body.id
				}
			)
			.then( id => dispatch( push( '/videos/' + id ) ) );
	}
}

export function fetchVideo( videoId ) {
	return ( dispatch, getState ) => {
		request
			.get( `${config.apiPath}/videos/${videoId}` )
			.then(
				( response ) => {
					dispatch( {
						type: VIDEO_COMPLETE,
						video: response.body
					} );
				}
			);
	}
}

export function fetchComments( videoId ){
	return ( dispatch, getState ) => {
		request
			.get( `${config.apiPath}/videos/${videoId}/comments` )
			.then(
				( response ) => {
					dispatch({
						type: COMMENT_LIST_COMPLETE,
						comments: response.body
					});
				}
			);
	};
}

export function postComment( { videoId, content } ) {
	return ( dispatch, getState ) => {
		dispatch( { type: POST_COMMENT_LOADING } );
		request
			.post( `${config.apiPath}/videos/${videoId}/comments` )
			.send( 'content=' + encodeURIComponent( content ) )
			.then(
				( response ) => {
					dispatch( {
						type: POST_COMMENT_COMPLETE,
						comment: response.body
					} );
					dispatch( fetchComments( videoId ) );
				}
			);
	};
}


export function updateCommentInput( input ) {
	return {
		type: COMMENT_INPUT,
		input
	};
}