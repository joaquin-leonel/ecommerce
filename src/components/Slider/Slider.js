import React from "react";
import Carousel from 'react-elastic-carousel';
import '../Slider/Slider.css'

export default function Banner({size}){

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]

    return(
        <div className="container mt-5 text-center">
        <Carousel  showArrows={size > 800 ? true : false} focusOnSelect={true} className="carousel" itemsToShow={1}>
                <img className="img-fluid" src="assets/slider1.png" alt="GeForce GTX 1660" border="0"/>
                <img className="img-fluid" src="assets/slider2.png" alt="Kingston SSD Solido" border="0"/>
                <img className="img-fluid" src="assets/slider3.png" alt="Strix motherBoards" border="0"/>
        </Carousel>
        </div>
    )
}