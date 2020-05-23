import React from 'react'

class Product extends React.Component {
	render() {
		const style = {
			border: '10px',
			backgroundColor: '#888888'
		}

		return (
			<div style={style} >
				<p>{this.props.name}</p>
				<p>{this.props.price}</p>
				<p>{this.props.description}</p>
			</div >
		)
	}
}

export default Product