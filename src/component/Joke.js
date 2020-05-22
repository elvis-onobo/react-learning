import React from 'react'

function Joke(props) {
	return (
		<div>
			<p style={{ display: props.question ? 'block' : 'none' }}>Question: {props.question}</p>
			<p style={{ color: props.question ? 'black' : '#888888' }}>Answer: {props.answer}</p>
		</div>
	)
}

export default Joke