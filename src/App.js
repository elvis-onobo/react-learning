import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './component/TodoItem';
import Joke from './component/Joke';

function App() {
	return (
		<div className="App">
			<Joke question="What is this" answer="This is what" />
			<Joke answer="This is it" />
			<TodoItem />
		</div>
	);
}

export default App;
