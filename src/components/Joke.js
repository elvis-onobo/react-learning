import React from 'react'

function Joke(props) {
	return (
		<div style={{ marginTop: '20px' }}>
			<div style={{ display: props.question ? 'block' : 'none' }}>{props.question}</div>
			<div style={{ color: props.question ? 'black' : '#888888' }}>Answer: {props.answer}</div>
		</div >
	)
}

export default Joke