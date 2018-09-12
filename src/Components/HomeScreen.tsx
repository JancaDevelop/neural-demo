import * as React from 'react';
import { withRouter,Route, Switch, Redirect, Link } from 'react-router-dom';
import { ROUTE_TODOS } from '../App';

class xHomeScreen extends React.Component {
	
	componentDidMount(){
		
	}

	render() {
		return (
			<div>
				<h1>this is homepage</h1>
				<Link to={`/${ROUTE_TODOS}`}>link to TODOS</Link>
			</div>
		);
	}
}

export const HomeScreen = withRouter(xHomeScreen);