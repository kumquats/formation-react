import VideoList from "./containers/VideoList";
import VideoForm from "./containers/VideoForm";
import VideoDetail from "./containers/VideoDetail";

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
		component: VideoDetail,
		exact: true
	},
];
export default routes;