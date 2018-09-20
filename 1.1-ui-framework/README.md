# TP Framework UI ES6

## Objectifs
L'objectif de ce TP est de développer un mini framework UI capable de générer et d'afficher des composants d'interface graphique réutilisables. Ce sera l'occasion de mettre en oeuvre les nouvelles fonctions d'ECMAScript 6+ et notamment les classes et l'héritage.

## Préparatifs
*Vos développements devront toujours être testés en utilisant le protocole `http`, il faut pour cela utiliser un serveur web (ouvrir le fichier en double-cliquant dessus l'ouvrira dans le navigateur mais avec le protocole `file://` ce qui peut poser des problèmes de rendu).*

- Installer un serveur apache/php (sur windows [Apachefriends xampp](https://www.apachefriends.org/fr/index.html) ou [wampserver](http://www.wampserver.com/))
- Dans l'arborescence du serveur apache (dossier www ou htdocs) créer un sous-dossier pour ce TP, et y placer le contenu du dossier `demarrage` de ce TP
- Installer [NodeJS](https://nodejs.org/en/) (version *"Current"*)
- Dans le dossier du projet, installer [Babel](https://babeljs.io/docs/setup/#installation)
	```bash
	cd /chemin/vers/mon/dossier/
	npm install --save-dev @babel/core @babel/cli
	```
- Installer le preset `env` qui permettra de transpiler les features ES2015+
	```bash
	npm install --save-dev @babel/preset-env
	```
- Puis créer un fichier `.babelrc` et configurer Babel avec le preset `env` :
	```json
	{
		"presets": ["@babel/env"]
	}
	```
	*NB : pour lancer la compilation, vous pourrez utiliser la commande suivante :*
	```bash
	.\node_modules\.bin\babel js -d build
	```
  	*Ou bien lancer la commande suivante qui tournera en tâche de fond et relancera la compilation dès que les fichiers js seront modifiés !*
	```bash
	.\node_modules\.bin\babel js -d build --verbose --watch --source-maps
	```
- Si ce n'est pas déjà le cas, je vous invite à vous familiariser avec les outils de développement du navigateur (Chrome de préférence) et notamment les onglets Console, Network et Sources et à les utiliser pendant les tps !

## Instructions
*Dans ce TP, le fichier index.html contient du code JavaScript qui utilise des classes qui n'existent pas, ce qui génère des erreurs dans la console.
<br>Votre rôle sera de coder ces classes de manière à faire fonctionner le code du fichier html sans erreurs.
<br>Bien entendu, le code JS du fichier html n'est pas modifiable !*

**1. Créer une classe `Component` qui représentera un composant graphique générique**
- Le constructeur de la classe `Component` doit prendre 3 paramètres:
	+ **tagName** (string): Le nom du tag HTML
	+ **attributes** (objet): Liste des attributs HTML du composant
	+ **children** (array): Liste des enfant du composant. Peut contenir d'autres instances de `Component` ou de simples String
- La classe devra implémenter les méthodes suivantes :
	+ **render()** : Retourne le code HTML du composant sous forme de chaîne de caractère en fonction du **tagName**, des **attributes** et des **children**. Cette méthode doit s'appuyer sur les méthodes **renderAttributes** et **renderChildren()** décrites ci-dessous.
	+ **renderAttributes()** : Retourne le code html des différents attributs html du composant.
	+ **renderChildren()** : Retourne une chaîne de caractères qui correspond à la concaténation du code HTML de tous les composants enfants. Cette méthode va appeler de manière récursive la méthode `render()` des children du composant. Mais attention, comme indiqué au dessus, tous les enfants ne sont pas forcément des Components, il y a aussi de simples String

**2. Créer une classe `Button` qui hérite de `Component`**
- Le constructeur de la classe doit prendre 2 paramètres:
	+ **text** : Texte à afficher dans le bouton
	+ **attributes** : Attributs du bouton
- Par défaut cette classe doit générer un 'button' HTML contenant le texte et les attributs définis dans le constructeur

**3. Créer une classe `RoundedRedButton` qui hérite de `Button`**
- Le constructeur de la classe doit prendre 2 paramètres:
	+ **text** : Texte à afficher dans le bouton
	+ **attributes** : Attributs du bouton
- Par défaut cette classe doit afficher un `<button>` HTML contenant le texte et les attributs définis dans le constructeur **ET** possédant des coins arrondis, une couleur de texte blanche et une couleur de fond rouge