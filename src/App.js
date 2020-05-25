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
import Conditional from './component/Conditional';

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: todosData,
			jokes: jokesData,
			products: productsData,
			isLoading: true
		}
		this.handleChange = this.handleChange.bind(this)
	}


	handleChange(id) {
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})

			return {
				todos: updatedTodos
			}
		})
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render() {
		const jokeComponents = this.state.jokes.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

		const productComponents = this.state.products.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

		const todosComponents = this.state.todos.map(todo => <TodoItem id={todo.id} text={todo.text} handleChange={this.handleChange} />)

		return (
			<div className="App" >
				<LoggedIn isLoggedIn={true} />
				{/* conditional for loading or not should be done in your App component. Functions should only be responsible for rendering one thing and not deciding what is rendered */}
				{this.state.isLoading ? <h1>Loading</h1> : <Conditional />}
				<StateEvent />
				{jokeComponents}
				{todosComponents}
				{productComponents}
			</div >
		)
	}
}

export default App;