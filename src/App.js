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
import Button from './component/Button';

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: todosData,
			jokes: jokesData,
			products: productsData,
			isLoading: true,
			unreadMessages: ['a', 'b'],
			isLoggedIn: false,
			character: {},
			loading: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
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

	handleClick() {
		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})
	}

	componentDidMount() {
		const url = 'https://swapi.dev/api/people/1'
		this.setState({ loading: true })
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					loading: false,
					character: data
				})
			})
		setTimeout(() => {
			this.setState({
				isLoading: false,
				isLoggedIn: true
			})
		}, 2000)
	}

	render() {
		const jokeComponents = this.state.jokes.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

		const productComponents = this.state.products.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

		const todosComponents = this.state.todos.map(todo => <TodoItem id={todo.id} text={todo.text} handleChange={this.handleChange} />)

		return (
			<div className="App" >
				{this.state.isLoggedIn ? <LoggedIn /> : <h1>You are Logged Out</h1>}
				{/* conditional for loading or not should be done in your App component. Functions should only be responsible for rendering one thing and not deciding what is rendered */}
				{this.state.isLoading ? <h1>Loading</h1> : <Conditional />}
				<Button isLoggedIn={this.state.isLoggedIn} handleClick={this.handleClick} />
				{this.state.loading ? 'Loading' : this.state.character.name}
				<StateEvent />
				{
					this.state.unreadMessages.length > 0 &&
					<h1>You have {this.state.unreadMessages.length} unread messages</h1>
				}
				{jokeComponents}
				{todosComponents}
				{productComponents}
			</div >
		)
	}
}

export default App;