/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { css } from "@emotion/react";

const Wrapper = css`
    position: relative; /* 캐러셀의 기준이 되는 부모 컨테이너 */
    width: 100%;
    height: 100%; /* 화면 전체 높이 */
    overflow: hidden;
`;

const imagecss = css`
    position: absolute;
    height: 100vh;
    width: 100%; /* 배경을 화면 전체로 채움 */
    overflow: hidden;
    left: 0;
    top: 0;
    z-index: -1; /* 배경으로 보내기 */
`;

const SwiperCss = css`
    width: 100%;
    height: 100%; /* 캐러셀 높이를 화면 전체로 설정 */
`;

const MainTempCarousel: React.FC = () => {
    return (
        <div css={Wrapper}>
            <Swiper
                css={[SwiperCss, imagecss]} /* Swiper에 스타일 적용 */
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}backmain.jpg`} css={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}back2.jpg`} css={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}back3.jpg`} css={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}back4.jpg`} css={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${import.meta.env.BASE_URL}back5.jpg`} css={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainTempCarousel;