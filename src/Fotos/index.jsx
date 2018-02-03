import React, { Component } from 'react'
import PortaRetrato from './portaretrato'
import LazyLoad from 'react-lazyload'

class MisFotos extends Component {

    render() {
        return(
            <div>
                <img src="/img/banner2.jpg" className="centro img-responsive" alt="Roberto Miguel - Arte Fotográfico" />
                <LazyLoad height={200} overflow={true} once={true}>
                    <PortaRetrato galeria="ballroom" title="Arte Escénico: Ballroom" totalDeFotos={34} />
                </LazyLoad>
                <LazyLoad height={200} overflow={true} once={true}>
                    <PortaRetrato galeria="preboda" title="Pre Boda: Joa & Facu" totalDeFotos={26} />
                </LazyLoad>
                <LazyLoad height={200} overflow={true} once={true}>
                    <PortaRetrato galeria="infantiles" title="Infantiles" totalDeFotos={28} />
                </LazyLoad>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default MisFotos