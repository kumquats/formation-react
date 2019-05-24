import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import VideoDetail from './containers/VideoDetail';
import VideoList from './containers/VideoList';
import VideoForm from './containers/VideoForm';
import reducer from "./reducers";
import configureStore from './store/configureStore';

// On crée le store en lui fournissant le "reducer"
// const store = createStore( reducer );
//
// Pour pouvoir utiliser les Redux Devtools, la syntaxe
// plus complexe est externalisée dans un module configureStore
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<VideoList />
		{/* <VideoForm /> */}
		{/* <VideoDetail /> */}
	</Provider>
	, document.querySelector('#appContainer')
);