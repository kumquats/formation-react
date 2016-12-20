# TP Formulaires et appels Ajax

## Objectifs
Connecter l'application à des webservices et utiliser les formulaires avec React.

## Préparatifs
- installer les packets NPM suivants avec l'option --save:
    + superagent
- consulter la [documentation de SuperAgent](http://visionmedia.github.com/superagent/) et le [github de SuperAgent](https://github.com/visionmedia/superagent) 
- si vous inspectez le code de la page html générée par le serveur, vous constaterez une balise `<script>` contenant un objet `config` généré par PHP et contenant des chemins qui seront utiles pour le développement. Pour pouvoir utiliser cette variable, ajouter la configuration suivante au **"webpack.config.js"**
  ```
    externals: {
        'config': 'config',
    }
  ```
Vous pouvez ensuite dans votre code faire référence à l'objet config avec la ligne `ìmport config from 'config';`

## Instructions
**VideoList :**
- dans **VideoList** remplacer l'utilisation des videos en dur par des données dynamiques : faire un appel GET vers le webservice `config.apiPath+"/videos"` pour récupérer la liste des vidéos depuis la base de données.

**Video :**
- dans le composant **Video** enlever le mécanisme de changement de vidéo au clic sur le bouton. A l'affichage du composant appeler le webservice GET `config.apiPath + "/videos/:id"` (*NB: pour le moment mettre l'id en dur dans la classe) et mettre à jour le DOM une fois les données récupérées.
- dans la **Video**, créer une méthode `fetchComments` qui appele le webservice GET `config.apiPath + "/videos/:id/comments"` une fois le déet afficher la liste des commentaires reçus en dessous de la vidéo.
- au dessus des commentaires, créer un formulaire contenant :
    + un textarea
    + un input submit
- enregistrer le commentaire saisi par l'utilisateur en appelant le webservice POST `config.apiPath + "/videos/:id/comments"`  et mettre à jour la liste des commentaires

**VideoForm :**
- créer un nouveau composant **"VideoForm"** qui permet d'enregistrer une nouvelle vidéo. Le composant est constitué d'un formulaire avec les champs suivants: 
        * Titre: type texte
        * Description: textarea
        * Fichier: type file
- au submit envoyer la vidéo au webservice POST `config.apiPath + "/videos"`

## Pour aller plus loin
- vider les champs de saisie (commentaire & vidéo) une fois les données enregistrées
- afficher des messages de loading et désactiver les formulaires pendant que les appels webservice se font
- ajouter une animation d'apparition des nouveaux commentaires
- Sur le composant **Video** ajouter des boutons "like" / "dislike" envoyant chacun un POST vers `config.apiPath + "/videos/:id/{likes|dislikes}"`.

## Proposition de Markup
**Commentaires**
```html
<form>
  <div class="form-group">
    <label htmlFor="content">Ajouter un commentaire</label>
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
<div>
    <h4>Commentaires: </h4>
    <div class="panel panel-default">
      <div class="panel-body">
        <h6><small></small></h6>
        ...
      </div>
    </div>
</div>
```