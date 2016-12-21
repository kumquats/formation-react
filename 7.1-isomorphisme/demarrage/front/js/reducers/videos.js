import { VIDEO_LIST_COMPLETE } from '../actions/';

export default function(state = [], action) {
	switch (action.type) {
		case VIDEO_LIST_COMPLETE :
			return action.videos;
		default:
			return state;
	}
}
