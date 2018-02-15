import {
	POST_COMMENT_LOADING,
	POST_COMMENT_COMPLETE,
	COMMENT_INPUT,
} from '../actions/';

export default function(state = {comment: null, isLoading: false, input: ''}, action) {
	switch (action.type) {
		case POST_COMMENT_LOADING :
			return {
				comment: null,
				isLoading: true,
				input: state.input
			};
		case POST_COMMENT_COMPLETE :
			return {
				comment: action.comment,
				isLoading: false,
				input: ''
			};
		case COMMENT_INPUT:
			return {
				comment: state.comment,
				isLoading: false,
				input: action.input
			}
		default:
			return state;
	}
}
