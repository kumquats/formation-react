import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
								<NavLink to="/" exact>Liste des vidéos</NavLink>
							</li>
							<li>
								<NavLink to="/videos/new" exact>Ajouter une vidéo</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
