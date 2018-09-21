import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from "connected-react-router";
import reducer from '../reducers';



export default function configureStore( browserHistory, preloadedState ) {

	// On récupère la fonction composeEnhancers de l'extension
	// chrome si elle existe sinon on utiliser la fonction
	// compose de redux
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		// On enrobe notre reducer avec celui de
        // react router en lui passant l'historique
		connectRouter( browserHistory )( reducer ),
		// on passe le state calculé côté server
		preloadedState,
		// On enrobe le applyMiddleware avec
		// le composeEnhancers de redux-devtools
		composeEnhancers(
			applyMiddleware(
				thunk,
				// routerMiddleware permet de capturer
				// les action creators de connected-react-router
				// permettant à nos vues de lancer des actions
				// de navigation.
				routerMiddleware( browserHistory )
			)
		)
	);
	return store;
}