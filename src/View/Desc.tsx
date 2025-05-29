/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Navigation from "../components/bottomBar";
import TopBar from "../components/topBar";
import { Wrapper } from "../style/Global";
import { css } from "@emotion/react";
import { MainPink } from "../style/colors";

const Person = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: 100%;
    gap: 10px;
`;

const Photo = styled.div`
    width: 100px;
    height: 150px;
    background-color: white;
`;

const GradientContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

const GradientOverlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${MainPink});
`;

const image = css`
    display: block;
    height: 55%;
    width: 100%;
`;

const Explanation = styled.div`
    display: grid;
    grid-template-rows: auto auto 1fr;
    width: 100%;
    height: 100%;
    @font-face {
        font-family: "Pretendard-Regular";
        src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }
`;

const Name = styled.h1`
    font-size: 24px;
    font-weight: bold;
`

const Description = styled.div`
    font-size: 14px;
    padding-top: 10px;
`
const Desc: React.FC = () => {
    return (
        <Wrapper>
            <TopBar />
            <Navigation />
            <GradientContainer>
                <img src="/Slide1.webp" css={image} />
                <GradientOverlay />
            </GradientContainer>
            <div css={{ border: "none", padding: "20px 15px" }}>
                <Person>
                    <Photo />
                    <Explanation>
                        <Name>김희중</Name>
                        <div>대표</div>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin accumsan sed lectus eget sodales. Nunc
                            pulvinar gravida magna, posuere fringilla nibh
                            auctor sed. Pellentesque habitant morbi tristique
                            senectus et netus et malesuada fames ac turpis
                            egestas. In ac ullamcorper magna, nec dictum risus.
                            Nam aliquet congue dui id finibus. Integer efficitur
                            vulputate mi, sed viverra ex finibus vel. Vestibulum
                            ante ipsum primis in faucibus orci luctus et
                            ultrices posuere cubilia curae;
                        </Description>
                    </Explanation>
                </Person>
            </div>
            <div css={{ border: "none", padding: "20px 15px" }}>
                <Person>
                    <Photo />
                    <Explanation>
                        <Name>김희중</Name>
                        <div>대표</div>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin accumsan sed lectus eget sodales. Nunc
                            pulvinar gravida magna, posuere fringilla nibh
                            auctor sed. Pellentesque habitant morbi tristique
                            senectus et netus et malesuada fames ac turpis
                            egestas. In ac ullamcorper magna, nec dictum risus.
                            Nam aliquet congue dui id finibus. Integer efficitur
                            vulputate mi, sed viverra ex finibus vel. Vestibulum
                            ante ipsum primis in faucibus orci luctus et
                            ultrices posuere cubilia curae;
                        </Description>
                    </Explanation>
                </Person>
            </div>
        </Wrapper>
    );
};

export default Desc;
