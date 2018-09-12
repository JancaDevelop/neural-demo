import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.fontFamily = "Roboto, Helvetica, Arial, sans-serif";

const Index = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
