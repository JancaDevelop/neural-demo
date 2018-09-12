import * as React from 'react';
import './App.css';
import { withRouter,Route, Switch, Redirect } from 'react-router-dom';
import { HomeScreen } from './Components/HomeScreen';
import { TodosScreen } from './Components/TodosScreen';
import { MenuBar } from './Components/Menu';

export const ROUTE_ROOT = "";
export const ROUTE_TODOS = "todos";

class xApp extends React.Component {

	public render() {
		return (
			<div>
				<MenuBar />
				<Switch>
					<Route exact path={`/${ROUTE_ROOT}`} component={HomeScreen}/>
					<Route path={`/${ROUTE_TODOS}`} component={TodosScreen}/>
				</Switch>
			</div>
		);
	}
}

export const App = withRouter(xApp);
