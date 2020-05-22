import React from 'react';
import './App.css';
import TodoItem from './component/TodoItem';
import Joke from './component/Joke';
import jokesData from './data/jokesData'
import productsData from './data/productsData';
import Product from './component/Product';

function App() {
	const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

	const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

	return (
		<div className="App">
			{jokeComponents}
			{productComponents}
			<TodoItem />
		</div>
	);
}

export default App;
