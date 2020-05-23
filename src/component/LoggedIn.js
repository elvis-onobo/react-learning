import React, { Component } from 'react'

class LoggedIn extends Component {
	constructor() {
		super()
		this.state = {
			isLoggedIn: false
		}
	}

	render() {
		return (
			<div>
				<h1>You are currently {this.state.isLoggedIn ? 'Logged In' : 'Logged Out'}</h1>
			</div>
		)
	}
}

export default LoggedIn