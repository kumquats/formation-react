import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<Link to="/" className="navbar-brand">
								<i className="glyphicon glyphicon-film" style={{marginRight:'10px'}}></i>
								Reactube
							</Link>
						</div>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/">Liste des vidéos</Link>
							</li>
							<li>
								<Link to="/videos/new">Ajouter une vidéo</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
