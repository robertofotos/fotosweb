import React, { Component } from 'react'
import PortaRetrato from './portaretrato'

class MisFotos extends Component {

    render() {
        return(
            <div>
                <img src="/img/banner2.jpg" className="centro img-responsive" alt="Roberto Miguel - Arte Fotográfico" />
                <PortaRetrato galeria="ballroom" title="Ante Escénico: Ballroom" totalDeFotos={34} />
                <PortaRetrato galeria="preboda" title="Pre Boda: Joa & Facu" totalDeFotos={26} />
                <PortaRetrato galeria="infantiles" title="Infantiles" totalDeFotos={28} />

                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default MisFotos