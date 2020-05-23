import React, { Component } from 'react'

class Joke extends Component {
	render() {
		return (
			<div>
				<p style={{ display: this.props.punchLine ? 'block' : 'none' }}>Question: {this.props.punchLine}</p>
			</div>
		)
	}
}

export default Joke