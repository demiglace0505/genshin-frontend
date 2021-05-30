import React from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Autoplay, Pagination, Navigation, EffectCoverflow
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import { reviews } from '../data/Reviews.js'

import Review from './Review'

import { colorWhite } from '../theme/colors.js'
import {moveInBottom} from '../theme/animations.js'
import reviewWall from '../images/review-wall.jpg'
import hero1 from '../images/hero-1.jpg'
import hero2 from '../images/hero-2.jpg'
import hero3 from '../images/hero-3.jpg'
import hero4 from '../images/hero-4.jpg'
import hero5 from '../images/hero-5.jpg'

const ReviewCarouselContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    rgba(0,0,0,0.4),
    rgba(0,0,0,0.4)),
     url(${reviewWall});
  height: 100vh;
`

const SwiperContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`

const ReviewHeader = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap');
  font-family: 'Sorts Mill Goudy', serif;
  padding: 4rem;
  margin: 0 auto;
  font-weight: bold;
  letter-spacing: 5px;
  user-select: none;
  color: ${colorWhite};
  font-size: 3.5rem;
  width: 40%;
  text-align: center;
  transition: all .6s;

  :hover{
    transform: skewY(-3deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(255,255,255, 1);
  }
`

const ReviewFooter = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap');
  font-family: 'Sorts Mill Goudy', serif;
  padding: 4rem;
  margin: 0 auto;
  letter-spacing: 2px;
  user-select: none;
  color: ${colorWhite};
  font-size: 3rem;
  width: 70%;
  text-align: center;
  transition: all .6s;

  :hover{
    transform: skewY(-1deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(255,255,255, 1);
  }
`

const ReviewCarousel = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow])
  console.log(reviews)

  return (

    <ReviewCarouselContainer>
      <ReviewHeader>
        Loved by Gamers.
        <br />
        Lauded by Critics.
      </ReviewHeader>
      <SwiperContainer>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          spaceBetween={100}
          slidesPerView={2}
          coverflowEffect={{
            "rotate": 35,
            "stretch": 300,
            "depth": 50,
            "modifier": 1,
            "slideShadows": true
          }}
          autoplay={{
            "delay": 10000,
            "disableOnInteraction": false
          }}
          loop={"true"}
          setWrapperSize={true}
        >

          {reviews.map((r) => {
            return (
              <SwiperSlide>
                <Review content={r.content} critic={r.critic} />
              </SwiperSlide>
            )
          })}

        </Swiper>
      </SwiperContainer>

      <ReviewFooter>
        Come and join the big hit RPG, with over 21 million registered users and generating over billions of dollars in revenue!
      </ReviewFooter>
    </ReviewCarouselContainer>
  )
}


export default ReviewCarousel