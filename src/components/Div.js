// ./src/components/Div.js
import React from 'react';

// const TextContext = React.createContext();
import { TextContext, ColorContext } from '../context/index';

export default class Div extends React.Component {
	render() {
		const { Consumer: TextConsumer } = TextContext;
		const { Consumer: ColorConsumer } = ColorContext;

		return (
			<TextConsumer>
				{text => (
					<ColorConsumer>
						{color => (
							<div>
								{text}: {color}
							</div>
						)}
					</ColorConsumer>
				)}
			</TextConsumer>
		);
	}
}
