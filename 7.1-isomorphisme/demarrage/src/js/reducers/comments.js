import { COMMENT_LIST_COMPLETE } from '../actions/';

export default function(state = [], action) {
	switch (action.type) {
		case COMMENT_LIST_COMPLETE :
			return action.comments;
		default:
			return state;
	}
}
