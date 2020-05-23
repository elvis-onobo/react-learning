import React, { Component } from 'react';
import './App.css';
import TodoItem from './component/TodoItem';
import Joke from './component/Joke';
import jokesData from './data/jokesData'
import productsData from './data/productsData';
import Product from './component/Product';
import todosData from './data/todosData';

class App extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

		const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

		const todosComponents = todosData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)

		return (
			<div className="App" >
				{jokeComponents}
				{productComponents}
				{todosComponents}
				<TodoItem />
			</div >
		)
	}
}

export default App;
