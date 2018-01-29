import React, { Component } from 'react'
import './catalogo.css'

class Catalogo extends Component {
	render() {
		return(
			<div className="productos">
				<img src="/img/banner2.jpg" className="centro img-responsive" alt="Catálogo" />
				<br />
				<div className="title">Catálogo de productos para eventos</div>
				<div className="eventos">
					<div>Fiestas Infantiles</div>
					<div>Bodas</div>
					<div>15 años</div>
					<div>Artes Escénicas</div>
				</div>
				<br />
		
				<div className="producto">
					<div><img alt="Llavero rectangular" src="/img/cat/llavero1.png" /></div>
					<div><img alt="Llavero corazón" src="/img/cat/llavero2.png" /></div>
					<div>Al salir de casa llevate con vos la sonrisa de tu bebé!!</div>
				</div>
				<div className="producto">
					<div><img alt="Foto Imán" src="/img/cat/iman1.png" /></div>
					<div><img alt="Foto Imán" src="/img/cat/iman2.png" /></div>
					<div>Junto al imán del delivery no puede faltar éste hermoso recuerdo!!<br />
						Foto imanes, uno grande de 20x30 y 20 de 10x15
					</div>
				</div>
				<div className="producto">
					<div><img alt="Posavasos" src="/img/cat/posavaso1.png" /></div>
					<div><img alt="Posavasos" src="/img/cat/posavaso2.png" /></div>
					<div>La bebida es más rica si está junto a un ser amado!!<br />
						Posavasos 9x9
					</div>
				</div>
				<div className="producto">
					<div><img alt="Funda Notebook 14" src="/img/cat/fundanotebook.png" /></div>
					<div>Cuida a tu bebé y a tu laptop también!!<br />
						Funda para notebook 14"
					</div>
				</div>
				<div className="producto">
					<div>Mi taza favorita!!<br />
						Taza de cerámica
					</div>
					<div><img alt="Taza Cerámica" src="/img/cat/tasaceramica.png" /></div>
				</div>
				<div className="producto">
					<div><img alt="Almohadón" src="/img/cat/almohadon.png" /></div>
					<div>Una casa no está completa si falta éste almohadón!!<br />
						Almohadón 40x40
					</div>
				</div>
				<div className="producto">
					<div>No existe fiesta sin globos!!!<br />
						Globos perlados impresos con nombre y dibujos
					</div>
					<div><img alt="Globos" src="/img/cat/globos.png" /></div>
				</div>
				<div className="producto">
					<div><img alt="Banner 90x150" src="/img/cat/banner90x150.png" /></div>
					<div>Ideal para decorar una recepción!!<br />
						Banner de lona 90x150 con soporte de pie
					</div>
				</div>
				<div className="producto">
					<div><img alt="Fotolibro 20x20" src="/img/cat/fotolibro20x20_1.png" />
						<img alt="Fotolibro 20x20" src="/img/cat/fotolibro20x20_2.png" />
					</div>
					<div>Recuerdo para todo la vida!!<br />
						Fotolibro 20x20 (20 fotos) con las mejores fotos
					</div>
				</div>
				<div className="producto">
					<div><img alt="Fotolibro 30x30" src="/img/cat/fotolibro30x30_1.png" />
						<img alt="Fotolibro 30x30" src="/img/cat/fotolibro30x30_2.png" />
					</div>
					<div>Los mejores recuerdos de tu evento!!<br />
						Fotolibro 30x30 40 páginas (100 fotos a elección)
					</div>
				</div>
				<div className="nota">
					TODOS LOS PRODUCTOS DEL CATALOGO<br />
					SON PERSONALIZADOS CON LAS FOTOS<br />
					PREVIAS O DE LA FIESTA A ELECCION DEL CLIENTE
				</div>
				<br />
				<div className="nota bold">Reserve fecha con anticipación<br />
					Solicite información:<br />
					info@robertomiguelfotos.com<br />
					Tel./Wsp: +54 0341 152-650711<br />
					<a href="https://www.facebook.com/robertomiguelfotos" 
					target="_blank" rel="noopener noreferrer">Mi Facebook</a>
				</div>
				<br /><br />
			</div>
		)
	}
}

export default Catalogo