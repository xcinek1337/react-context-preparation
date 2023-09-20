// ./src/components/App.js
import React from 'react';
import Box from './Box';

// const TextContext = React.createContext();
import { TextContext } from '../context/index';

export default class App extends React.Component {
	render() {
		const { Provider } = TextContext;
		return (
			<Provider value='Context API test!'>
				<Box />
			</Provider>
		);
	}
}
