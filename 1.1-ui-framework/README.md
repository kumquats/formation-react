# TP Framework UI ES6

## Objectifs
L'objectif de ce TP est de développer un mini framework UI capable de générer et d'afficher des composants d'interface graphique réutilisables. Ce sera l'occasion de mettre en oeuvre les nouvelles fonctions d'ECMAScript 6+ et notamment les classes et l'héritage.

## Préparatifs
*Vos développements devront toujours être testés en utilisant le protocole `http`, il faut pour cela utiliser un serveur web (ouvrir le fichier en double-cliquant dessus l'ouvrira dans le navigateur mais avec le protocole `file://` ce qui peut poser des problèmes de rendu).*
- Installer un serveur apache/php (sur windows [Apachefriends xampp](https://www.apachefriends.org/fr/index.html) ou [wampserver](http://www.wampserver.com/))
- Dans l'arborescence du serveur apache (dossier www ou htdocs) créer un sous-dossier pour ce TP, c'est dans ce dossier que vous créerez vos fichiers html et css.
- Installer [NodeJS](https://nodejs.org/en/) (version *"Current"*)
- Dans le dossier du projet, installer [Babel](https://babeljs.io/docs/setup/#installation)
```bash
cd /chemin/vers/mon/dossier/
npm install --save-dev babel-cli babel-loader babel-core
```
- Installer le preset `env` qui permettra de transpiler les features ES2015+
```bash
npm install --save-dev babel-preset-es2015
```
- Puis créer un fichier `.babelrc` et configurer Babel avec le preset `env` :
```json
{
  "presets": ["env"]
}
```
*NB : pour lancer la compilation, vous pourrez utiliser la commande suivante :*
```bash
.\node_modules\.bin\babel js -d build --watch --source-maps
```

## Instructions
*Dans ce TP, le fichier index.html contient du code JavaScript qui utilise des classes qui n'existent pas, ce qui crée des erreurs dans la console.
<br>Votre rôle sera de coder ces classes de manière à faire fonctionner le code du fichier html sans erreurs.
<br>Bien entendu, le code JS du fichier html n'est pas modifiable !*

**1. Créer une classe `Component` qui représentera un composant graphique générique**
- Le constructeur de la classe **Component** doit prendre 3 paramètres:
	+ **tagName** (string): Le nom du tag HTML
	+ **attributes** (objet): Liste des attributs HTML du composant
	+ **children** (array): Liste des enfant du composant. Peut contenir d'autres instances de **Component** ou de simples string
- La classe devra implémenter les méthodes suivantes
	+ **setAttribute(name, value)** : Permet de modifier/ajouter un attribut
	+ **getAttribute(name)** : Permet de récupérer la valeur d'un attribut
	+ **getTagName()** : Permet de récupérer le tag du composant HTML
	+ **render()**: Retourne le code HTML du composant en chaine de caractère en fonction du **tagName**, des **attributes** et des **children**. Cette méthode doit s'appuyer sur la méthode **renderChildren()** décrite ci-dessous
	+ **renderChildren()**: Retourne le HTML des composants enfants concaténés dans une seule string

**2. Créer une classe `Button` qui hérite de `Component`**
- Le constructeur de la classe doit prendre 2 paramètres:
	+ **text** : Texte à afficher dans le bouton
	+ **attributes** : Attributs du bouton
- Par défaut cette classe doit générer un 'button' HTML contenant le texte et les attributs définis dans le constructeur

**3. Créer une classe `RoundedRedButton` qui hérite de `Button`**
- Le constructeur de la classe doit prendre 2 paramètres:
	+ **text** : Texte à afficher dans le bouton
	+ **attributes** : Attributs du bouton
- Par défaut cette classe doit afficher un 'button' HTML contenant le texte et les attributs définis dans le constructeur **ET** possédant des coins arrondis, une couleur de texte blanche et une couleur de fond rouge