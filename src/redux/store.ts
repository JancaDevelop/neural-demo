import {createStore, combineReducers} from 'redux'
import { ITodoReducer, todoReducer } from './todo/todoReducer';

export interface IStore {
    todoReducer: ITodoReducer
}

const reducerList = {
    todoReducer
};

export const store = createStore<IStore,any,any,any>(combineReducers(reducerList));