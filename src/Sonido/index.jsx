import React, { Component } from 'react'

class Sonido extends Component {
	render() {
		return (
				<div>
					<audio controls className="reproductor">
              			<source src="/snd/lucky.mp3" type="audio/mpeg" />
              			su navegador no soporta audio!!
          			</audio>
				</div>
			)
	}
}

export default Sonido