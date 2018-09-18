import { ITodo } from "./redux/todo/todoReducer";
import { todoAction } from "./redux/todo/todoAction";
import { store } from "./redux/store";

/**
 * todo datamanager
 */
export const todoDM = {
	
	//stahne ulozene todos ze serveru a ulozi je do reduceru
	fetchTodos: function(){

		//misto sample toto nahrajes z firebase
		const sampleTodoList: ITodo[] = [
			{id: 0, name: "herak", text: "koupit herak", isDone: false },
			{id: 1, name: "spani", text: "vyspat se", isDone: true },
			{id: 2, name: "picovina", text: "zjistit picovinu", isDone: false },
		]

		//nahrane data vlozis do reduceru
		store.dispatch(todoAction.setTodoList({todoList: sampleTodoList}));
	}
}