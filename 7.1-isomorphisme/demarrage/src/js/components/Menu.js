import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
	render() {
		return (
			<div className="header clearfix">
				<nav>
					<ul className="nav nav-pills pull-right">
						<li role="presentation">
							<Link to="/">Liste des vidéos</Link>
						</li>
						<li role="presentation">
							<Link to="/videos/new">Ajouter une vidéo</Link>
						</li>
					</ul>
				</nav>
				<h3 className="text-muted">REACT - YouTube Killer</h3>
			</div>
		);
	}
}
