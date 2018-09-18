import { ITodo } from "./todoReducer";
import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory();

enum EActionType {
    TODO_ACTION_SET_TODO_LIST = "TODO_ACTION_SET_TODO_LIST",
    TODO_ACTION_ADD_TODO = "TODO_ACTION_ADD_TODO",
    TODO_ACTION_DELETE_TODO = "TODO_ACTION_DELETE_TODO"
}

export const todoAction = {

	setTodoList: actionCreator<{
		todoList: ITodo[]
	}>(EActionType.TODO_ACTION_SET_TODO_LIST),

    addTodo: actionCreator<{
        todo: ITodo
    }>(EActionType.TODO_ACTION_ADD_TODO),

    deleteTodo: actionCreator<{
        todoId: number
    }>(EActionType.TODO_ACTION_DELETE_TODO)
    
}