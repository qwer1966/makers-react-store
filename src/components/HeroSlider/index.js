import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import HeroImg from '../../assets/images/hero.jpeg';
import HeroImg2 from '../../assets/images/hero2.jpeg';

import classes from './heroSlider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

export default function HeroSlider() {
  return (
    <Carousel
      className={classes.sliderWrapper}
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
    >
      <div>
        <img src={HeroImg} alt="hero" />
      </div>
      <div>
        <img src={HeroImg2} alt="hero" />
      </div>
    </Carousel>
  );
}
