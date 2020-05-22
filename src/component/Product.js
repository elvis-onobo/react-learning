import React from 'react'

function Product(props) {
	const style = {
		border: '10px',
		backgroundColor: '#888888'
	}
	return (
		<div style={style}>
			<p>{props.name}</p>
			<p>{props.price}</p>
			<p>{props.description}</p>
		</div >
	)
}

export default Product