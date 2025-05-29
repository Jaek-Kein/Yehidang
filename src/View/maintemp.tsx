/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { MainPink } from "../style/colors";
import { WheatGold } from "./../style/colors";
import { css } from "@emotion/react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import MainTempCarousel from "./../components/mainTempCarousel";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    background-color: ${MainPink};
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    box-sizing: border-box;
`;

const TextArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    padding-bottom: 0px;
    height: 100%;

    @font-face {
        font-family: "kdg_Medium";
        src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/kdg_Medium.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
    font-family: "kdg_Medium";
`;

const Title = styled.h1`
    color: ${WheatGold};
`;

const TextWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff73;
    padding: 10px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 10px;
    border: 1px solid lightgray;
`;
const imagecss = css`
    position: fixed;
    height: 100vh;
    width: 100%; /* 배경을 화면 전체로 채움 */
    overflow: hidden;
    left: 0;
    top: 0;
    z-index: 0; /* 배경으로 보내기 */
    border: 2px solid ${MainPink};
    box-sizing: border-box;
`;

const Downbutton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;
const MainTemp: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const lastPage = 2;

    const handleScroll = (e: WheelEvent) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            setPage((prev: number) => Math.min(prev + 1, lastPage));
        } else if (e.deltaY < 0) {
            setPage((prev: number) => Math.max(prev - 1, 0));
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        window.addEventListener("wheel", handleScroll, { passive: false });

        container.style.top = `${page * -100}vh`;

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [page]);

    return (
        <Wrapper>
            <div css={imagecss}>
                <MainTempCarousel />
            </div>
            <div />
            <TextArea>
                <TextWrapper>
                    <Title className="text-5xl">예히당</Title>
                    우리쌀로 만든, 우리 디저트
                    <div className="pt-4 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin accumsan sed lectus eget sodales. Nunc pulvinar
                        gravida magna, posuere fringilla nibh auctor sed.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. In ac ullamcorper
                        magna, nec dictum risus. Nam aliquet congue dui id
                        finibus. Integer efficitur vulputate mi, sed viverra ex
                        finibus vel. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia curae;
                    </div>
                </TextWrapper>
            </TextArea>
            <Downbutton
                onClick={() => setPage((prev) => Math.min(prev + 1, lastPage))}
            >
                <FaArrowAltCircleDown
                    size={30}
                    color="ffffff"
                    css={{ paddingBottom: "5px" }}
                />
            </Downbutton>
        </Wrapper>
    );
};

export default MainTemp;
