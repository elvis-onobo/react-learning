import React from 'react'

class TodoItem extends React.Component {
	render() {
		const completedStyle = {
			fontStyle: 'italic',
			color: '#cdcdcd',
			textDecoration: 'line-through'
		}

		return (
			<div>
				<p>{this.props.id}</p>
				<input type="checkbox"
					checked={this.props.completed}
					onChange={() => this.props.handleChange(this.props.key)} />
				<p style={this.props.completed ? completedStyle : null}>{this.props.text} {this.props.key}</p>
			</div>
		)
	}
}

export default TodoItem