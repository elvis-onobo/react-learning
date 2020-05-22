import React from 'react';
import './App.css';
import Joke from './components/Joke';
import TodoItem from './components/TodoItem';

function App() {
	return (
		<div className="App">
			<Joke question='What the name of the Nigerian president?' answer='Bugari' />
			<Joke question='' answer='Dolemite!!!' />
			<TodoItem />
		</div>
	);
}

export default App;
