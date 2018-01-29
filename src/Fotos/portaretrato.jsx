import React, { Component } from 'react'
import {Glyphicon} from 'react-bootstrap'
import './fotos.css'

class PortaRetrato extends Component {
    constructor(props) {
        super(props)
            this.state = {
                img:     '',
                fotoActual: 0,
                cargando: false,
            }
        
        this.imagenNueva = new Image();
        this.imagenNueva.onload = (img) => {
          this.setState({
                     img: img.target.src,
                cargando: false,
            })
        }
    }

    componentDidMount() {
        this.cargarImg('siguiente')
    }


    cargarImg = (boton) => {
        let nuevaFoto = this.state.fotoActual

        if (boton==="siguiente") {
            nuevaFoto++
        } else {
            nuevaFoto--
        }
        if (nuevaFoto < 1) nuevaFoto = this.props.totalDeFotos
        if (nuevaFoto > this.props.totalDeFotos) nuevaFoto = 1
        this.setState({
            cargando: true,
            fotoActual: nuevaFoto,
        })

        this.imagenNueva.src = `/img/${this.props.galeria}/${nuevaFoto}.jpg`
    }

    render() {
        return(
            <div className="portaretrato">
                
                <div className="title">{this.props.title}</div>

                <div className='galeria sombra'>

                    <img className="imagen" src={this.state.img} alt='' />
            
                    <button className="anterior"
                            name="anterior"
                            id="anterior"
                            onClick={()=>this.cargarImg('anterior')} 
                            disabled={this.state.cargando} >
                        <span> <Glyphicon glyph='chevron-left'/> </span>
                    </button>
            
                    <button className="siguiente"
                            onClick={()=>this.cargarImg('siguiente')} 
                            name="siguiente"
                            disabled={this.state.cargando}>
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