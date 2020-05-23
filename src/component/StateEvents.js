import React, { Component } from 'react'

class StateEvent extends Component {
	constructor() {
		super()
		this.state = {
			count: 0
		}
		this.handleClick = this.handleClick.bind(this)
		this.squareNumber = this.squareNumber.bind(this)
		this.resetState = this.resetState.bind(this)
	}

	handleClick() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			}
		})
	}

	squareNumber() {
		this.setState(prevState => {
			return {
				count: prevState.count * prevState.count
			}
		})
	}

	resetState() {
		this.setState({ count: 0 })
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleClick}>Change!</button>
				<button onClick={this.squareNumber}>Square Number!</button>
				<button onClick={this.resetState}>Reset</button>
			</div>
		)
	}
}

export default StateEvent