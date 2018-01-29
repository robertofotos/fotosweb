import React, { Component } from 'react'
import './home.css'

class Home extends Component {
	render() {
		return (
				<div>
					<img  src="/img/banner.jpg"
                        className="centro img-responsive"
                       alt="Roberto Miguel Arte Fotográfico" />
                    <div className="contacto">
                    	Contacto:<br />
                    	+54 0341-152650711<br />
                    	info@robertomiguelfotos.com
                    </div>
                    <div className="about">
                    	<img src="/img/rm.jpg" alt="Roberto Miguel" /><br />
                    	A cerca de mí:
                    </div>
                    <div className="historia">
Hola, me llamo Roberto Miguel Costi nací en el año 1973 en Rosario, república argentina,
me inicié en la fotografía a temprana edad como pasatiempo, por causa de mi aguda
disminución visual no me atrevía a desempeñarme como fotógrafo profesional y me
dediqué a la programación, en el año 2015 me pude operar la vista y fue como volver
a nacer, al mes de la operación comencé a estudiar fotografía de una forma más intensa,
empecé a realizar trabajos en diferentes eventos sociales, hoy en día sigo capacitándome
y trabajando en lo que me más gusta que es la fotografía, mis clientes me recomiendan
porque capto lo esencial en cada evento, mi estilo de trabajo es observar todo lo que sucede
alrededor y capturar cada sonrisa, cada abrazo, o una mirada que refleje los sentimientos
del momento, en cada imagen dejo lo mejor de mi, convirtiendo cada foto en <b>Arte Fotográfico</b>.
                    <br/>
                    <div className="firma" align="right">Gracias por visitar mi sitio web<br />
                        Lo invito a visitar mis álbunes de fotos: <span onClick={this.props.verFotos} className="link">"Mis Fotos"</span>
                    </div>
                    </div>
				</div>
			)
	}
}

export default Home