/** @jsxImportSourece @emotion/react */
import styled from "@emotion/styled";
import Navigation from "../components/bottomBar";
import { MainPink } from "../style/colors";
import TopBar from "../components/topBar";
import ImageCarousel from "../components/mainImageCarousel";
import { WheatGold } from "./../style/colors";

const Wrapper = styled.div`
    background-color: ${MainPink};
    min-height: 100vh;
    width: 100%;
`;

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    padding-bottom: 0px;

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
    height: 5%;
    z-index:1000;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${MainPink});
`;

const MainPage: React.FC = () => {
    return (
        <Wrapper>
            <TopBar />
            <GradientContainer>
                <ImageCarousel />
                <GradientOverlay />
            </GradientContainer>

            <Navigation />
            <TextArea className="pb-0">
                <Title className="text-5xl">예히당</Title>
                우리쌀로 만든, 우리 디저트
                <div className="pt-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin accumsan sed lectus eget sodales. Nunc pulvinar
                    gravida magna, posuere fringilla nibh auctor sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. In ac ullamcorper magna,
                    nec dictum risus. Nam aliquet congue dui id finibus. Integer
                    efficitur vulputate mi, sed viverra ex finibus vel.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae;
                </div>
            </TextArea>
        </Wrapper>
    );
};

export default MainPage;
