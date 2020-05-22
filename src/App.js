import React from 'react';
import './App.css';
import Joke from './component/Joke';
import TodoItem from './component/TodoItem';

function App() {
	return (
		<div className="App">
			<div>
				<Joke question="What to do" answer="whatever you want" />
				<Joke answer="change the world" />
			</div>
			<div>
				<TodoItem />
			</div>
		</div>
	);
}

export default App;
