
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { matchPath } from 'react-router';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';

// template de la page html à générer
import page from './page';

// on importe les classes de notre application qui seront nécessaires au rendu de la page
import routes from '../routes';
import reducer from '../reducers';
import Layout from '../containers/Layout';

// on crée une instance de serveur http express
const app = express();

// On crée des routes pour les fichiers statiques
// (js,css,images, etc...)
app.use('/public', express.static('./../site/web'));
app.use('/uploads', express.static('./../site/web/uploads'));

// On intercepte toutes les autres requêtes
app.get(/^\/.*/, (req, res, next) => {

	// On crée un store spécifique pour le rendu serveur
	// comme on est pas dans un navigateur, on utilise memoryHistory au lieu browserHistory
	const memoryHistory = createMemoryHistory({initialEntries: [req.originalUrl]});
	const store = createStore(
		connectRouter( memoryHistory )( reducer ),
		applyMiddleware( thunk, routerMiddleware( memoryHistory ) )
	);

	// On teste l'url demandée (req.path) avec les différentes routes de l'application
	// On utilise pour ça la fonction matchPath de React Router
	// Dès qu'une route correspond à l'url demandée, on note la méthode fetchData pour exécution ultérieure
	const promises = [];
	const routeFound = routes.some( route => {
		const match = matchPath( req.path, route );
		if ( match && route.component.fetchData ) {
			promises.push( route.component.fetchData( store, match.params ) );
		}
		return match;
	})

	// on exécute les méthodes fetchData éventuelles
	Promise.all( promises ).then( () => {
		res.status(routeFound ? 200 : 404).send(
			// puis on génère le code html avec le state pré-calculé
			page(
				renderToString(
					<Provider store={store}>
						<ConnectedRouter history={memoryHistory}>
							<Layout />
						</ConnectedRouter>
					</Provider>
				),
				store.getState()
			)
		);
	});
});

// On lance le serveur et on écoute le port 3333
app.listen(3333, function () {
	console.log(`l'appli Reactube est lancée sur le port 3333,
	testez la sur http://localhost:3333 !`);
});