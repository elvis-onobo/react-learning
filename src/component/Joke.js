import React from 'react'

function Joke(props) {
	return (
		<div>
			<p style={{ display: props.punchLine ? 'block' : 'none' }}>Question: {props.punchLine}</p>
		</div>
	)
}

export default Joke