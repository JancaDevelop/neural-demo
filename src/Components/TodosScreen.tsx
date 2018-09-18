import * as React from 'react';
import {connect} from 'react-redux';
import { IStore } from '../redux/store';
import { ITodoReducer } from '../redux/todo/todoReducer';
import { withRouter,Route, Switch, Redirect } from 'react-router-dom';
import { ROUTE_TODOS } from '../App';
import { TodoDetailScreen } from './TodoDetailScreen';

interface IProps {
	match: any
	todoReducer: ITodoReducer
}

interface IState {

}

class xTodosScreen extends React.Component<IProps,IState> {

	componentDidMount(){
		
	}

	componentDidUpdate(prevProps){

	}

    render(){

		const {todoList} = this.props.todoReducer;

        return (
            <div>
				<h1>This is todos</h1>
				todo1
				todo2
				todo3

				<Route exact path={`/${ROUTE_TODOS}/:todoId`} component={TodoDetailScreen}/>
				{/* {todoList.map(todo=>{
					return <div>{todo.text}</div>
				})} */}
            </div>
        )
    }
}

export const TodosScreen = connect((state: IStore)=>({
	todoReducer: state.todoReducer
}))(xTodosScreen);