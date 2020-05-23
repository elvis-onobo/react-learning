import React from 'react'

class TodoItem extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.id}</p>
				<input type="checkbox"
					checked={this.props.completed}
					onChange={() => this.props.handleChange(this.props.key)} />
				<p>{this.props.text}</p>
			</div>
		)
	}
}

export default TodoItem