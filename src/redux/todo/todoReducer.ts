import { Action } from "redux";
import {isType} from 'typescript-fsa';
import { todoAction } from "./todoAction";

export interface ITodo {
    id: number
    text: string
    isDone: boolean
}

export interface ITodoReducer {
    todoList: ITodo[]
}

const initialState: ITodoReducer = {
    todoList: []
};

export function todoReducer(state=initialState, action: Action){

    if(isType(action,todoAction.addTodo)){
        return {
            ...state,
            todoList: [ ...state.todoList, action.payload.todo ]
        }
    }

    if(isType(action,todoAction.deleteTodo)){
        return {
            ...state,
            todoList: state.todoList.filter( t=> t.id != action.payload.todoId )
        }
    }

    return state;
}