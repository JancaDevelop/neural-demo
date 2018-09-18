import * as React from 'react';
import {connect} from 'react-redux';
import { IStore } from '../redux/store';
import { ITodoReducer } from '../redux/todo/todoReducer';
import { withRouter,Route, Switch, Redirect } from 'react-router-dom';
import { ROUTE_TODOS } from '../App';

interface IProps {
	match: any
	todoReducer: ITodoReducer
}

interface IState {

}

class xTodoDetail extends React.Component<IProps,IState> {

    render(){

		const {todoList} = this.props.todoReducer;

        return (
            <div>
				TODO DETAIL
            </div>
        )
    }
}

export const TodoDetail = connect((state: IStore)=>({
	todoReducer: state.todoReducer
}))(xTodoDetail);