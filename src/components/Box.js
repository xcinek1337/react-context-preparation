// ./src/components/Box.js
import React from 'react';
import Div from './Div';

import { ColorContext } from '../context/index';

export default class Box extends React.Component {
	render() {
		const { Provider } = ColorContext;
		return (
			<Provider value='#336699'>
				<Div />
			</Provider>
		);
	}
}
