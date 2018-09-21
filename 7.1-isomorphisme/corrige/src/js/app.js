import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

import Layout from './containers/Layout';
import reducer from "./reducers";
import configureStore from './store/configureStore';

// On crée un historique synchronisé avec le store
// (browserHistory = Historique basé sur l'URL du navigateur)
const browserHistory = createBrowserHistory({
  basename: config.basePath // racine du site concaténé aux URLs du Router
});

// On crée le store en lui fournissant le "reducer"
// const store = createStore( reducer );
//
// Pour pouvoir utiliser les Redux Devtools la syntaxe,
// plus complexe est externalisée dans un module configureStore
// On passe l'historique à la fonction configureStore
// On passe également le state par défaut calculé côté serveur par node
const store = configureStore( browserHistory, window.__PRELOADED_STATE__ || {} );

ReactDOM.render(
    <Provider store={store}>
		<ConnectedRouter history={browserHistory}>
			<Layout />
		</ConnectedRouter>
    </Provider>
	, document.querySelector('#appContainer')
);