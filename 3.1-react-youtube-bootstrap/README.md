# TP Création d'un Youtube Like

## Objectifs

L'objectif de ce TP est de mettre en place les bases d'une application similaire à Youtube.

## Préparatifs
- Récupérer le contenu du dossier 'demarrage' du TP et placer les fichiers dans un dossier de votre arborescence web (*ex: c:\wamp\www\3.1-react-youtube-bootstrap\\*) (*vous pouvez également repartir des fichiers de votre tp précédent, dans ce cas ne récupérez que le dossier `demarrage/site` et placez le à côté du dossier `src`*)
- Dans le dossier `site` coller le dossier `vendor` (fourni par le formateur)
- Exécutez le script SQL `site/schema.sql` (dans phpmyadmin ou en ligne de commande mysql) afin de mettre en place la base de données
- Dans le dossier `src` lancer la commande `npm install` pour récupérer les dépendances du projet (babel, webpack)
- Toujours dans le dossier `src`, installer les paquets NPM suivants avec l'option `--save-dev` :
    + [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react/)
- Installer les packets NPM suivants avec l'option `--save` :
    + [react](https://www.npmjs.com/package/react)
    + [react-dom](https://www.npmjs.com/package/react-dom)
- Ajouter le preset `@babel/preset-react` dans le fichier `.babelrc`
- Modifier le fichier `src/webpack.config.js` afin que le fichier de sortie soit écrit dans le dossier `site/web/js` :
```js
output: {
	path: path.resolve(__dirname, '../site/web/js'),
	filename: 'app.bundle.js'
},
```
- Supprimer les fichiers devenus inutiles :
	+ `src/js/helloWorld.js`
	+ `src/index.html`
	+ et le dossier `src/build`

## Instructions
1. **Modifier le fichier `src/js/app.js` pour initialiser une application React contenant un composant unique `VideoDetail`**<br>
Rendre l'application dans la balise d'id `appContainer`.
2. **Créer le composant `VideoDetail` dans le dossier `src/js`.** Ce composant :
    + dispose d'un state `video` de la forme :
	```js
	{
		id: <Integer>,
		title: <String>,
		description: <String>,
		file: <String>
	}
	```
	+ doit afficher le titre & la description de la vidéo contenue dans son state (cf. [Proposition de DOM](#proposition-de-dom))
    + doit afficher une balise html5 `<video>` dont la source (attribut `src`) correspond à la propriété `file` du state `video`

3. **Tester l'application sur `http://<votre-url-projet>/site/web`**



## Pour aller plus loin
1. **Créer un composant `VideoList`** :
	- Modifier le fichier `app.js` pour afficher ce composant à la place du composant `VideoDetail`
	- Dans le composant `VideoList` initialiser le state avec une propriété `videos`. Cette propriété `videos`va contenir une liste d'objets du même format que le state `video` du composant `VideoDetail`.<br>
	Dans chacun de ces objets, ajouter une propriété `thumbnail` qui contiendra le nom du fichier image correspondant à la vignette de la vidéo. Chaque objet du tableau aura donc ce format :
	```js
	{
		id: <Integer>,
		title: <String>,
		description: <String>,
		file: <String>,
		thumbnail: <String>
	}
	```
	- Afficher la liste des vidéos qui se trouvent dans son state : chaque vidéo de la liste sera représentée simplement par son titre et son image de vignette (champ `thumbnail`) cf. [Proposition de DOM](#proposition-de-dom) pour un exemple de code HTML.<br>
	***Attention** pour que ce soit bien clair : l'affichage de la liste ne se fait **pas** avec le composant `VideoDetail` qui correspond à une autre page (qui contient notamment le player video qu'on ne souhaite pas avoir dans la page liste).*<br>


2. **Quelques optimisations pour le composant `VideoDetail`** :
	- Dans le composant `VideoDetail` le champ description devient facultatif, ne pas l'afficher s'il n'y en a pas dans le state.
	- Toutes les 2 secondes, la vidéo affichée dans le composant `VideoDetail` doit changer pour afficher la vidéo suivante de la VideoList (externaliser la liste des vidéos dans un fichier js distinct `videos.js` et importé dans chaque composant)
	- Dans le composant `VideoDetail` ne pas re-rendre la vidéo si la vidéo n'a pas changé lors du changement aléatoire.

3. **Pour la `VideoList`** :
	- Toutes les X secondes, ajouter une nouvelle vidéo en haut de la `VideoList`

## Proposition de DOM

**VideoDetail :**
```html
<div class="row marketing">
    <div class="col-sm-12 col-md-12">
        <div class="video-detail">
            <div class="caption">
                <video
                    style="width:100%; background-color:black"
                    height="300"
                    controls
                    src=""
                >
                </video>
                <h3></h3>
                <p></p>
            </div>
        </div>
    </div>
</div>
```


**VideoList :**
```html
<div class="row marketing">
    <div class="col-lg-12">
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <img class="media-object"
                        alt="cat" src="./uploads/thumbnails/video1.jpg"
                        width="246"
						height="138" />
                </div>
                <div class="media-body">
                    <h4 class="media-heading"></h4>
                    <p></p>
                </div>
            </li>
        </ul>
    </div>
</div>
```
