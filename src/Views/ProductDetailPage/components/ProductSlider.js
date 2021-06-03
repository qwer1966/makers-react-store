import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import classes from '../productDetail.module.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

export default function ProductSlider() {
  return (
    <Carousel
      className={classes.sliderWrapper}
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
    >
      {/* <div className={classes.heroImg}>
        <img src={HeroImg2} alt="hero" />
      </div> */}
    </Carousel>
  );
}
