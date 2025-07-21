import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import styled from "@emotion/styled";

// Swiper CSS 임포트
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MainPink } from "../../style/colors";

// 커스텀 스타일
const CustomSwiper = styled(Swiper)`
  width: 100%;
  min-height: 350px;
  height: 45%;
  padding: 20px 0;

  .swiper-slide {
    background: linear-gradient(135deg, ${MainPink} 0%, #ad2f59 100%);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .swiper-pagination-bullet {
    background: #667eea;
    opacity: 0.5;

    &.swiper-pagination-bullet-active {
      background: #764ba2;
      opacity: 1;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;

    &:after {
      font-size: 20px;
    }
  }
`;

const SlideContent = styled.div`
  text-align: center;
  padding: 12%;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 5%;
  height: 100%;
  width: 100%;
`;

const ImgArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

function MenuCarousel() {
  const slides = [
    { title: "맞춤선물세트 6구" },
    { title: "맞춤선물세트 9구" },
    { title: "맞춤선물세트 10구" },
    { title: "맞춤선물세트 15구" },
    { title: "오란다 박스" },
  ];

  return (
    <CustomSwiper
      loop={true}
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      spaceBetween={30}
      slidesPerView={2.5}
      centeredSlides={true}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideContent>
            <ImgArea></ImgArea>
            <h3>{slide.title}</h3>
          </SlideContent>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
}

export default MenuCarousel;
