import * as React from 'react';
import {connect} from 'react-redux';
import { IStore } from '../redux/store';
import { ITodoReducer } from '../redux/todo/todoReducer';

interface IProps {
	match: any
	todoReducer: ITodoReducer
}

interface IState {

}

class xTodosScreen extends React.Component<IProps,IState> {

	componentDidMount(){
		console.log(this.props.match.params);
	}

	componentDidUpdate(prevProps){

	}

    render(){

		const {todoList} = this.props.todoReducer;

        return (
            <div>
				<h1>This is todos</h1>
				{todoList.map(todo=>{
					return <div>{todo.text}</div>
				})}
            </div>
        )
    }
}

export const TodosScreen = connect((state: IStore)=>({
	todoReducer: state.todoReducer
}))(xTodosScreen);