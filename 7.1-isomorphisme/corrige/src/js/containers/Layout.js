import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import Menu from '../components/Menu';
import routes from '../routes';

class Layout extends React.Component {
	render() {
		return (
			<div className="container">
				<Menu />
				<Switch>
					{ routes.map( route => (
						<Route key={route.path} {...route} />
					)) }
				</Switch>
			</div>
		);
	}
}
// Les composants qui utilisent du routing doivent
// être décorés avec la fonction "withRouter"
export default withRouter(Layout);