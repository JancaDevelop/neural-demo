import * as React from 'react';
import { withRouter,Route, Switch, Redirect, Link } from 'react-router-dom';
import { ROUTE_TODOS } from '../App';

class xHomeScreen extends React.Component {
	
	componentDidMount(){
		
	}

	render() {
		return (
			<div>
				<h1>This is homepage</h1>
			</div>
		);
	}
}

export const HomeScreen = withRouter(xHomeScreen);