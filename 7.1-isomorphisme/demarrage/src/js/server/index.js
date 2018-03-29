// Fichier server/index.js

import express from 'express';
import React from 'react';
// On récupère la fonction "renderToString" de "react-dom"
import { renderToString } from 'react-dom/server';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// On récupère les routes
import routes from '../routes';
import reducers from '../reducers';
import page from './page';
import config from 'config';

var app = express();

// On crée une route pour les fichiers statiques
// (js,css,images, etc...)
app.use('/public', express.static('./../site/web'));
app.use('/uploads', express.static('./../site/web/uploads'));

// On intercepte toutes les autres requêtes
app.get(/^\/.*/, (req, res, next) => {

  // On crée un store spécifique pour le rendu serveur
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(
    reducers,
    applyMiddleware(thunk)
  );
  const history = syncHistoryWithStore(memoryHistory, store);

  // On utilise la fonction match de React Router
  // pour récupérer la route qui match l'URL
  match(
    { routes: routes, location: req.url, basename: config.basePath },
    (error, redirectLocation, renderProps) => {
        if (error) {
            // S'il y a une erreur en retourne une
            // erreur 500
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            // S'il y a une redirection
            // on redirige
            res.redirect(
                302,
                redirectLocation.pathname + redirectLocation.search
            );
        // Si une route a bien matché
        } else if (renderProps) {
            // On récupère les paramètres de la route
            let { query, params } = renderProps;

            // On récupère le composant correspondant à la route
            let Component = renderProps.components[
                renderProps.components.length - 1
            ].WrappedComponent;

            // On crée une fonction qui envoie le HTML au client
            // et qui prend le state en paramètre
            let sendHTML = ( state ) => res.status(200).send(
                page( renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                ), state )
            );

            // Si le composant a une méthode fetchData
            if ( Component.fetchData )
            {
                // On appelle fetchData en fournissant
                // le store et les paramètres du router
                Component
                    .fetchData( store, params, query )
                    // On retourne le HTML avec le state
                    .then( () => sendHTML( store.getState() ) )
                ;
            }
            else
            {
                // On retourne le HTML sans state
                sendHTML( {} );
            }
        } else {
            // Sinon on retourne une 404
            res.status(404).send('Not found')
        }
    })
});

// On lance le serveur et on écoute le port 3333
app.listen(3333, function () {
	console.log('l\'appli Youtube est lancée sur le port 3333, testez la sur http://localhost:3333 !');
});