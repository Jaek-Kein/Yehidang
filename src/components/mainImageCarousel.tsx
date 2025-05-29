/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { css } from "@emotion/react";

const SwiperCss = css`
    width: 100%;
    height:100vw;
`

const ImageCarousel:React.FC = () => {
    return(
        <Swiper 
        css={SwiperCss}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        >
            <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}Slide1.webp`} css={{width:'100%'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}Slide2.webp`}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}Slide3.webp`}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}Slide4.webp`}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}Slide5.webp`}/>
            </SwiperSlide>
        </Swiper>
    )
}

export default ImageCarousel;