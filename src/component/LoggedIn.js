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
				<h1>You are currently Logged In</h1>
			</div>
		)
	}
}

export default LoggedIn