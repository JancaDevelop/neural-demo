import * as React from 'react';
import {connect} from 'react-redux';
import { IStore } from '../redux/store';

interface IProps {
	match: any
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
        return (
            <div>
                abcd
            </div>
        )
    }
}

export const TodosScreen = connect((state: IStore)=>({

}))(xTodosScreen);