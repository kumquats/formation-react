import React from 'react';

import Menu from '../components/Menu';

class App extends React.Component {
	render(){
		return (
			<div className="container">
				<Menu />
				{ this.props.children }
			</div>
		);
	}
}

export default App;