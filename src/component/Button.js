import React, { Component } from 'react'

class Button extends Component {
	render() {
		const buttonText = this.props.isLoggedIn ? "Logged Out" : "Logged In"

		return (
			<button onClick={this.props.handleClick} isLoggedIn={this.props.isLoggedIn}>{buttonText}</button>
		)
	}
}

export default Button