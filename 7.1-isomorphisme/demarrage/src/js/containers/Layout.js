import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import VideoList from './VideoList';
import VideoForm from './VideoForm';
import VideoDetail from './VideoDetail';
import Menu from '../components/Menu';

class Layout extends React.Component {
	render() {
		return (
			<div className="container">
				<Menu />
				<Switch>
					<Route exact path="/" component={VideoList} />
					<Route exact path="/videos/new" component={VideoForm} />
					<Route exact path="/videos/:id" component={VideoDetail} />
				</Switch>
			</div>
		);
	}
}
// Les composants qui utilisent du routing doivent
// être décorés avec la fonction "withRouter"
export default withRouter(Layout);