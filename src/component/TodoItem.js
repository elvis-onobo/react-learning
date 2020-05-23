import React from 'react'

class TodoItem extends React.Component {
	render() {
		return (
			<div>
				<input type="checkbox" checked={this.props.completed} />
				<p>{this.props.text}</p>
			</div>
		)
	}
}

export default TodoItem