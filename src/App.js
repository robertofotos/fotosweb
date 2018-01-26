import React, { Component } from 'react'
import MenuTab from './componentes/menuTab'
import ShowImg from './componentes/showImg'

const galeria = (nombre) => {
    return {
        'ballroom' : 37,
        'preboda'  : 30,
    }[nombre];
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nroFotoActual: 9,
      galeriaActual: "ballroom",
      maximoActual: 37,
    }
  }

  cambiarFoto = () => {
    let actual = this.state.nroFotoActual
    if (actual===this.state.maximoActual) actual = 0
      actual++
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = "url('/img/" + this.state.galeriaActual + "/" + actual + ".jpg')";
    this.setState({nroFotoActual: actual})
  }

  cambiarFotoAnterior = () => {
    let actual = this.state.nroFotoActual
    if (actual===1) actual = this.state.maximoActual + 1
      actual--
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = "url('/img/" + this.state.galeriaActual + "/" + actual + ".jpg')";
    this.setState({nroFotoActual: actual})
  }

  cambiarGaleria = (a) => {
  let nuevaGal = a.target.name
    let nuevoMaximo = galeria(nuevaGal)
    this.setState({
      nroFotoActual: 1,
      galeriaActual: nuevaGal,
      maximoActual: nuevoMaximo,
    })
    this.cambiarFoto()
  }

  render() {
    return (
      <div>
         <audio controls>
          <source src="/snd/lucky.mp3" type="audio/mpeg" />
          su navegador no soporta audio!!
        </audio> 
        <MenuTab/>
        <button onClick={this.cambiarFotoAnterior}>Anterior</button>
        <button onClick={this.cambiarFoto}>Siguiente</button>
        <button onClick={this.cambiarGaleria} name="preboda">cambiar galeria</button>
        <ShowImg/>
      </div>
    )
  }
}

export default App;
