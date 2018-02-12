import { VIDEO_COMPLETE } from '../actions/';

export default function(state = null, action) {
	switch (action.type) {
		case VIDEO_COMPLETE:
			return action.video;
		default:
			return state;
	}
}
