import React from 'react';
import { Route, IndexRoute } from 'react-router';

// On importe les composants de notre application
import App from './containers/App';
import VideoList from './containers/VideoList';
import Video from './containers/Video';
import VideoForm from './containers/VideoForm';

// On crée une route principale à la racine du site.
// Cela aura pour effet d'englober tous les composant des
// routes enfants dans le composant "App". Il sert alors de
// "layout à l'application."
export default (
    <Route path="/" component={App}>
        {/* IndexRoute permet de définir le composant
        à afficher si l'URL match le path du parent */}
        <IndexRoute component={VideoList} />
        <Route path="videos/new" component={VideoForm} />
        <Route path="videos/:id" component={Video} />
    </Route>
)