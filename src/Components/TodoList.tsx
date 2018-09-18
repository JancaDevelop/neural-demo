import * as React from 'react';
import {connect} from 'react-redux';
import { IStore } from '../redux/store';
import { ITodoReducer } from '../redux/todo/todoReducer';
import { Link } from 'react-router-dom';
import { ROUTE_TODOS } from '../App';

interface IProps {
	match: any
	todoReducer: ITodoReducer
}

interface IState {

}

class xTodoList extends React.Component<IProps,IState> {

    render(){

		const {todoList} = this.props.todoReducer;

        return (
            <div>
				{todoList.map(todo=>{
					return (
						<div>
						<Link to={`/${ROUTE_TODOS}/${todo.id}`}>{todo.name}</Link>
						</div>
					)
				})}
            </div>
        )
    }
}

export const TodoList = connect((state: IStore)=>({
	todoReducer: state.todoReducer
}))(xTodoList);