import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from "connected-react-router";
import createRootReducer from '../reducers';


export default function configureStore( browserHistory ) {

	// On récupère la fonction composeEnhancers de l'extension
	// chrome si elle existe sinon on utiliser la fonction
	// compose de redux
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		createRootReducer( browserHistory ),
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