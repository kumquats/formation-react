/**
 * Classe Component de base.
 * C'est de cette classe qu'héritent tous les composants de notre librairie.
 * @see Button
 * @see RoundedRedButton
 */
class Component {
	/**
	 * Constructeur du composant.
	 * Permet de l'initialiser avec son tagName, une liste d'attributs et des enfants.
	 * Les attributs et les enfants peuvent être modifiés par la suite
	 * à l'aide des fonctions setAttribute et appendChild
	 * @param  {String} tagName    Nom de la balise html à générer
	 * @param  {Object} attributes Liste des attributs html à ajouter sous la forme de paires clé:valeur
	 * @param  {Array}  children   Liste des enfants du composant. Chaque enfant peut être un autre Component ou une String.
	 */
	constructor( tagName = 'div', attributes = {}, children = [] ) {
		// on utilise les valeurs par défaut d'ES6 pour les paramètres de la méthode
		this.tagName = tagName;
		this.attributes = attributes;
		this.children = children;
	}

	/**
	 * Ajoute ou remplace un attribut.
	 * @param {String} name  Clé de l'attribut à modifier/ajouter
	 * @param {String} value valeur de l'attribut
	 * @see #getAttribute()
	 * @see #constructor()
	 */
	setAttribute( name, value ) {
		this.attributes[ name ] = value;
	}

	getAttribute( name ) {
		return this.attributes[ name ];
	}

	getTagName() {
		return this.tagName;
	}

	appendChild( child ) {
		this.children.push( child );
	}

	/**
	 * Retourne le code html correspondant au Component et à ses enfants.
	 * @return {String} code html généré
	 * @see #renderAttributes()
	 * @see #renderChildren()
 	*/
	render() {
		// on utilise une template string ES6
		// ce qui permet d'avoir un meilleur aperçu du rendu final
		// (il vaut mieux avoir un plugin de coloration syntaxique qui supporte l'ES6.
		// sur sublime text, vous pouvez installer le plugin "Babel" depuis package control)
		return `<${this.tagName} ${this.renderAttributes()}>
					${this.renderChildren()}
				</${this.tagName}>`;
	}

	renderAttributes() {
		let attributesHtml = '';
		for ( const attribute in this.attributes ) {
			attributesHtml += ` ${attribute}="${this.attributes[ attribute ]}"`
		}
		return attributesHtml;
	}

	renderChildren() {
		let childrenHtml = '';
		// on utilise ici le forEach avec une Arrow Function
		// ce qui simplifie légèrement le code
		this.children.forEach( child => {
			// comme le composant supporte des enfants de type différents
			// (String ou Component) il faut faire le test ici
			// NB: instanceof Component retourne true également pour les classes filles
			childrenHtml += child instanceof Component ? child.render() : child;
		});
		return childrenHtml;
	}
}

class Button extends Component {
	constructor( text = '', attributes = {} ) {
		// dans une classe enfant, on peut faire appel à la méthode super()
		super( 'button', attributes, [ text ] );
	}
}

class RoundedRedButton extends Button {
	constructor( text = '', attributes ) {
		super(
			text,
			{
				style: 'border-radius: 5px; color: white; background-color: red',
				...attributes
			}
			// ici on utilise l'opérateur rest
			// nécessite le plugin @babel/plugin-proposal-object-rest-spread
			// @see https://babeljs.io/docs/plugins/
			// @see https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
			// @see https://github.com/tc39/proposal-object-rest-spread
		);
	}
}