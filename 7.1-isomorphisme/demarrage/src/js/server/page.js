import config from './config.json';

export default function( html = '', preloadedState = {} ) {
    return `<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>REACT - YouTube Killer</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="/public/css/flatly-bootstrap.css">
		<link rel="stylesheet" type="text/css" href="/public/css/main.css">
	</head>
	<body>
		<main id="appContainer">${html}</main>

		<!-- Pour certaines pages on préchargera
		éventuellement les données -->
		<script type="text/javascript">
			window.__PRELOADED_STATE__ =
				${JSON.stringify(preloadedState)};
			window.config =
				${JSON.stringify(config)};
		</script>
		<script src="/public/js/app.bundle.js"></script>
	</body>
	</html>`;
}