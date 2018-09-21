import VideoList from "./containers/VideoList";
import VideoForm from "./containers/VideoForm";
import Video from "./containers/Video";

const routes = [
	{
		path: '/',
		component: VideoList,
		exact: true
	},
	{
		path: '/videos/new',
		component: VideoForm,
		exact: true
	},
	{
		path: '/videos/:id',
		component: Video,
		exact: true
	},
];
export default routes;