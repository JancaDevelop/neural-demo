import * as React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
// import {Home} from '@material-ui/icons';
import { ROUTE_ROOT, ROUTE_TODOS } from '../App';


export class MenuBar extends React.Component<{},{}> {

    render(){
        return (
            <div style={styles.menuBarDiv}>
                <Link to={`/${ROUTE_ROOT}`}>
					<Button variant="flat" style={styles.button}>HOMEPAGE</Button>
				</Link>
                <Link to={`/${ROUTE_TODOS}`}>
					<Button variant="flat" style={styles.button}>TODOS</Button>
				</Link>
            </div>
        )
    }
}

const styles = {
	menuBarDiv: {
		width: "100%",
		borderBottom: "3px solid black"
	},
	button: {
		fontSize: 16
	}
}