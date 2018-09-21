import config from './config.json';

export default function( html = '', preloadedState = {} ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mon site</title>
	        <link rel="stylesheet" type="text/css" href="/public/css/bootstrap.min.css">
	        <link rel="stylesheet" type="text/css" href="/public/css/bootstrap-theme.min.css">
	        <link rel="stylesheet" type="text/css" href="/public/css/jumbotron-narrow.css">
	        <link rel="stylesheet" type="text/css" href="/public/css/transitions.css">
        </head>
        <body>
            <!-- On injecte le HTML ici-->
            <div id="appContainer">${html}</div>
            <!-- Pour certaines pages on préchargera
            éventuellement les données -->
            <script type="text/javascript">
                window.__PRELOADED_STATE__ =
                    ${JSON.stringify(preloadedState)};
                window.config =
                	${JSON.stringify(config)};
            </script>
		    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		    <script src="/public/js/bootstrap.min.js" charset="utf-8"></script>
            <script type="text/javascript" src="/public/js/app.bundle.js">
            </script>
        </body>
        </html>`;
}