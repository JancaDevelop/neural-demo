import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.fontFamily = "Roboto, Helvetica, Arial, sans-serif";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#88ffff',
            main: '#4dd0e1',
            dark: '#009faf',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff94c2',
            main: '#f06292',
            dark: '#ba2d65',
            contrastText: '#000',
        },
    },
});

const Index = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
