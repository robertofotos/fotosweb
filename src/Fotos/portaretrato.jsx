import React, { Component } from 'react'
import {Glyphicon} from 'react-bootstrap'
import './fotos.css'

class PortaRetrato extends Component {
    constructor(props) {
        super(props)
            this.state = {
                img:     '',
                galeria: this.props.galeria,
                fotoActual: 0,
                maxActual: this.props.totalDeFotos,
                cargando: false,
            }
    }

    componentDidMount() {
        this.cargarImg({target: {name:"siguiente"} })
    }

    cargarImg = (boton) => {
        let imagenNueva = new Image();
        let nuevaFoto = 0
        if (boton.target.name==="siguiente") {
            nuevaFoto = this.state.fotoActual + 1
            if (nuevaFoto > this.state.maxActual) nuevaFoto = 1
        } else {
            nuevaFoto = this.state.fotoActual - 1
            if (nuevaFoto < 1) nuevaFoto = this.state.maxActual
        }
        
        let entorno = this
        this.setState({
            cargando: true,
        })
        imagenNueva.onload = function(img) {
          entorno.setState({
                     img: img.target.src,
                cargando: false,
              fotoActual: nuevaFoto,
            })
        };
        imagenNueva.src = `/img/${this.state.galeria}/${nuevaFoto}.jpg`
        //this.setState({
        //})
    }

    render() {
        return(
            <div className="portaretrato">
                
                <div className="title">{this.props.title}</div>

                <div className='galeria sombra'>

                    <img className="imagen" src={this.state.img} alt='' />
            
                    <button className="anterior" onClick={this.cargarImg} 
                            name="anterior" disabled={this.state.cargando} >
                        <span> <Glyphicon glyph='chevron-left'/> </span>
                    </button>
            
                    <button className="siguiente" onClick={this.cargarImg} 
                            name="siguiente" disabled={this.state.cargando}>
                        <span> <Glyphicon glyph='chevron-right' /> </span>
                    </button>
        
                    <div className="cargando">
                        {this.state.cargando && 'cargando...'}
                    </div>    
                                
                </div>
            </div>
        )
    }
}

export default PortaRetrato