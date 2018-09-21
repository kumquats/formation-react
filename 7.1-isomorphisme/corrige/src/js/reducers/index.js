import { combineReducers } from 'redux';
import video from './video';
import comments from './comments';
import newComment from './newComment';
import newVideo from './newVideo';
import videos from './videos';

export default combineReducers({
	video,
	comments,
	newComment,
	newVideo,
	videos
});


// Pour des "petits" projets,
// on peut faire un reducer en un seul fichier,
// avec la notation suivante
/*
import {
	VIDEO_LIST_COMPLETE,

	POST_VIDEO_LOADING,
	POST_VIDEO_COMPLETE,

	VIDEO_COMPLETE,
	POST_COMMENT_LOADING,
	POST_COMMENT_COMPLETE,
	COMMENT_LIST_COMPLETE,
	COMMENT_INPUT,
} from '../actions/';

const defaultState = {
	videos: [],
	video: null,
	comments: [],
	newComment: {comment:null, isLoading: false, input: ''},
	newVideo: {video:null, isLoading: false},
}

export default function( state = defaultState, action ) {
	// on peut faire des if
	if (action.type == VIDEO_LIST_COMPLETE){
		return { ...state, videos: action.videos };
	}
	// et/ou un switch
	switch (action.type) {
		case POST_VIDEO_LOADING :
			return {
				...state,
				newVideo: {
					video: action.video,
					isLoading: true,
				}
			};
		case POST_VIDEO_COMPLETE :
			return {
				...state,
				newVideo: {
					video: action.video,
					isLoading: false,
				}
			};
		case VIDEO_COMPLETE:
			return {
				...state,
				video: action.video
			};
		case COMMENT_LIST_COMPLETE:
			return {
				...state,
				comments: action.comments,
			};
		case POST_COMMENT_LOADING:
			return {
				...state,
				newComment: {
					comment: null,
					isLoading: true,
					input: state.newComment.input,
				}
			};
		case POST_COMMENT_COMPLETE:
			return {
				...state,
				newComment: {
					comment: action.comment,
					isLoading: false,
					input: '',
				}
			};
		case COMMENT_INPUT:
			return {
				...state,
				newComment: {
					comment: state.newComment.comment,
					isLoading: false,
					input: action.input,
				}
			};
	}
	// Dans le cas ou l'action dispatchée n'a pas d'impact
	// sur le state on retourne alors le state d'origine
	return state;
}
*/