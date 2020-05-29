import React, { Component } from 'react'

class Button extends Component {
	render() {
		const buttonText = this.props.isLoggedIn ? "Log Out" : "Log In"

		return (
			<button onClick={this.props.handleClick} isLoggedIn={this.props.isLoggedIn}>{buttonText}</button>
		)
	}
}

export default Button