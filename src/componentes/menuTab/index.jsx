import React, { Component } from 'react'

const menu = [
    "A cerca de Mí",
    "Infantiles",
    "Artes Escénicas",
    "Contacto: +54 0341 152-650711",
]

class menuTab extends Component {
    render() {
        return (
           <div>
               {menu.map((m)=>(
                   <div>{m}</div>
               ))}
           </div>
        )
}
}

export default menuTab