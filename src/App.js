import React, { Component } from 'react';
import './App.css';
import TodoItem from './component/TodoItem';
import Joke from './component/Joke';
import jokesData from './data/jokesData'
import productsData from './data/productsData';
import Product from './component/Product';
import todosData from './data/todosData';
import LoggedIn from './component/LoggedIn';
import StateEvent from './component/StateEvents';

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: todosData,
			jokes: jokesData,
			products: productsData
		}
	}

	render() {
		const jokeComponents = this.state.jokes.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

		const productComponents = this.state.products.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

		const todosComponents = this.state.todos.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)

		return (
			<div className="App" >
				<LoggedIn isLoggedIn={true} />
				<StateEvent />
				{jokeComponents}
				{productComponents}
				{todosComponents}
				<TodoItem />
			</div >
		)
	}
}

export default App;