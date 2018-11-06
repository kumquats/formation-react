# TP Formulaires et appels Ajax

## Objectifs
Connecter l'application à des webservices et utiliser les formulaires avec React.

## Préparatifs
- installer les packets NPM suivants avec l'option --save:
    + [superagent](https://www.npmjs.com/package/superagent)
- consulter la [documentation de SuperAgent](http://visionmedia.github.com/superagent/) et le [github de SuperAgent](https://github.com/visionmedia/superagent)
- vérifier la configuration de PHP afin de s'assurer que le serveur autorise l'upload de fichiers volumineux (pour permettre l'upload de vidéos) :
	+ ouvrir le fichier `php.ini` en cliquant sur le bouton "config" de la ligne "Apache" puis "PHP (php.ini)"
	+ rechercher dans le fichier les valeurs `upload_max_filesize` et `post_max_size` et les passer toutes les deux à la valeur "20M" (qui signifie 20 Mo)
	+ relancer ensuite Apache pour prendre en compte les changements en appuyant sur "Stop" puis "Start" dans le panneau Xampp
- si vous inspectez le code de la page html générée par le serveur, vous constaterez une balise `<script>` contenant un objet `config` généré par PHP et contenant des chemins qui seront utiles pour le développement. Pour pouvoir utiliser cette variable, ajouter la configuration suivante au `webpack.config.js` :
	```
	externals: {
		'config': 'config',
	},
	```
	Vous pouvez ensuite dans votre code faire référence à l'objet config avec la ligne `import config from 'config';`


## Instructions
1. Dans `VideoList` remplacer l'utilisation des videos en dur par des données dynamiques : faire un appel GET vers le webservice `config.apiPath+"/videos"` pour récupérer la liste des vidéos depuis la base de données.
2. créer un nouveau composant `VideoForm` qui permet d'enregistrer une nouvelle vidéo. Le composant est constitué d'un formulaire avec les champs suivants :
	+ Titre : input type text
	+ Description : textarea
	+ Fichier : input type file<br/>
	*NB : la vignette est générée automatiquement côté serveur, pas besoin de champ de saisie dans le formulaire donc !*
3. Au submit envoyer la vidéo en POST au webservice **`config.apiPath + "/videos"`** : le webservice est configuré pour recevoir une requête multipart avec 3 valeurs : "title", "description" et "file". La documentation de superagent contient une section dédiée à ce type de requêtes : https://visionmedia.github.io/superagent/#multipart-requests

## Pour aller plus loin
- Dans `VideoDetail` appeler le webservice GET `config.apiPath + "/videos/:id"` à l'affichage du composant (*NB: pour le moment mettre l'id en dur dans la classe) et mettre à jour le DOM une fois les données récupérées.
- Dans la `VideoDetail`, créer une méthode `fetchComments` qui appelle le webservice GET `config.apiPath + "/videos/:id/comments"` puis afficher la liste des commentaires reçus en dessous de la vidéo (cf. [Proposition de Markup](#proposition-de-markup)).
- Au dessus des commentaires, créer un formulaire contenant :
    + un textarea
    + un input submit
- Enregistrer le commentaire saisi par l'utilisateur en appelant le webservice POST `config.apiPath + "/videos/:id/comments"`  et mettre à jour la liste des commentaires
- Dans les formulaires d'ajout de vidéo et de saisie d'un nouveau commentaire, vider les champs de saisie une fois les données enregistrées
- afficher des messages de loading et désactiver les formulaires pendant que les appels webservice se font


## Proposition de Markup
**Commentaires**
```html
<form>
  <div class="form-group">
    <label for="content">Ajouter un commentaire</label>
    <textarea
        class="form-control"
        name="content"
        id="content"
        cols="30"
        rows="2"
    />
  </div>
  <button type="submit" class="btn btn-default">
    Envoyer
  </button>
</form>
<div class="comments">
    <h4>Commentaires: </h4>
    <div class="panel panel-default">
      <div class="panel-body">
        <h6><small></small></h6>
        ...
      </div>
    </div>
</div>
```