import * as React from 'react';
import {connect} from 'react-redux';
import { IStore } from '../redux/store';
import { ITodoReducer } from '../redux/todo/todoReducer';
import { withRouter,Route, Switch, Redirect } from 'react-router-dom';
import { ROUTE_TODOS } from '../App';
import { TodoList } from './TodoList';

interface IProps {
	match: any
	todoReducer: ITodoReducer
}

interface IState {

}

class xTodoDetail extends React.Component<IProps,IState> {

    render(){
		
		const urlTodoId = this.props.match.params.todoId;
		
		const {todoList} = this.props.todoReducer;
		
		const todoSelected = todoList.find(todo=> todo.id == urlTodoId)

        return (
            <div>
				<h2>{todoSelected.name}</h2>
				text: {todoSelected.text}
            </div>
        )
    }
}

export const TodoDetail = connect((state: IStore)=>({
	todoReducer: state.todoReducer
}))(xTodoDetail);