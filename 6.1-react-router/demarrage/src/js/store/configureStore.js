import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';



export default function configureStore() {

	// On récupère la fonction composeEnhancers de l'extension
	// chrome si elle existe sinon on utiliser la fonction
	// compose de redux
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
	  reducer,
	  // On enrobe le applyMiddleware avec
	  // le composeEnhancers de redux-devtools
	  composeEnhancers(
	    applyMiddleware(thunk)
	  )
	);
	return store;
}