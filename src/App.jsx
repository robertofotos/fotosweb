import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import Fotos from './Fotos'
import Inicio from './Home'
import Sonido from './Sonido'
import Catalogo from './Catalogo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        seleccionado: "Inicio"
    }

  }

//  componentDidMount() {}
    handleChange = (seleccionado) => {
      this.setState({
        seleccionado: seleccionado
      })
    }

    verFotos = () => {
     this.setState({
        seleccionado: "Fotos"
      }) 
    }

  render() {

    let contenido = (menu) => {
      return {
          "Inicio": <Inicio verFotos={this.verFotos} />,
          "Fotos": <Fotos />,
          "Catalogo": <Catalogo />,
        }[menu];
    }

    return (
      <div>
          <Sonido />

          <Tabs value={this.state.seleccionado}
                onChange={this.handleChange} >
              <Tab label="Inicio"   value="Inicio" />
              <Tab label="Mis Fotos"    value="Fotos" />
              <Tab label="Productos" value="Catalogo" />
          </Tabs>

          <div className="contenido">
              {contenido(this.state.seleccionado)}
          </div>
      </div>
    )
  }
}

export default App;
