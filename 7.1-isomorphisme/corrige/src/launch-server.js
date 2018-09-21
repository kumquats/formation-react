// On surcharge la fonction require
// afin de gérer le module global "config"
Module = require('module');
Module.prototype.requireOrig = Module.prototype.require;
Module.prototype.require = function ( module ) {
	if ( module == 'config' )
	{
		// Si on essaie de charger le module "config"
		// on charge à la place le config.json du serveur
		return this.requireOrig( __dirname + '/js/server/config.json' );
	}
    return this.requireOrig( module );
}

// Permet que tous les require suivants passent par la
// moulinette de BabelJS
require("@babel/register");

// On importe le serveur
require("./js/server");