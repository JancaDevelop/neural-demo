import * as React from 'react';
import {connect} from 'react-redux';
import { IStore } from '../redux/store';
import { ITodoReducer } from '../redux/todo/todoReducer';
import { withRouter,Route, Switch, Redirect } from 'react-router-dom';
import { ROUTE_TODOS } from '../App';
import { TodoDetail } from './TodoDetail';
import { TodoList } from './TodoList';
import { todoDM } from '../todoDM';

interface IProps {
	match: any
	todoReducer: ITodoReducer
}

interface IState {

}

class xTodosScreen extends React.Component<IProps,IState> {

	componentDidMount(){
		//tady poloz dotaz na firebase, stahni data a vloz je do reduxu
		todoDM.fetchTodos();
	}

    render(){

        return (
            <div>
				<h1>TODOS SCREEN</h1>
				<Route path={`/${ROUTE_TODOS}`} component={TodoList}/>
				<Route exact path={`/${ROUTE_TODOS}/:todoId`} component={TodoDetail}/>
            </div>
        )
    }
}

export const TodosScreen = connect((state: IStore)=>({
	todoReducer: state.todoReducer
}))(xTodosScreen);