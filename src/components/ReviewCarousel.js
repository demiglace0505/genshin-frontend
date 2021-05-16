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

import { backgroundDark } from '../theme/colors.js'
import reviewWall from '../images/review-wall.jpg'
import hero1 from '../images/hero-1.jpg'
import hero2 from '../images/hero-2.jpg'
import hero3 from '../images/hero-3.jpg'
import hero4 from '../images/hero-4.jpg'
import hero5 from '../images/hero-5.jpg'

const SwiperContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  /* height: 60vh; */
  align-self: stretch;
  background-image: linear-gradient(
    rgba(0,0,0,0.4),
    rgba(0,0,0,0.4)),
     url(${reviewWall});
     
  /* display: flex;
  align-content: center; */
`

const ReviewHeader = styled.h1`

`

const ReviewCarousel = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow])
  console.log(reviews)

  return (
    

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
  )
}


export default ReviewCarousel