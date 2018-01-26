import React, { Component } from 'react'
import {Slider} from 'react-slick'

//import './index.css'
 //           <img className="showImg" src={this.state.imgActual} alt="" />
      const settings = {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
      }

class ShowImg extends Component {
    constructor(props) {
      super(props)
      this.state = {
        imgActual: "/img/ballroom/9.jpg",
      }
    }
    render() {
        return (
           <div>
                <Slider {...settings}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                  <div><h3>5</h3></div>
                  <div><h3>6</h3></div>
                </Slider>
           </div>
        )
}
}

export default ShowImg