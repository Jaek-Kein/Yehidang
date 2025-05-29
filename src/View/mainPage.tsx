import styled from "@emotion/styled";
import Navigation from "../components/bottomBar";
import { MainPink } from "../style/colors";
import TopBar from "../components/topBar";
import ImageCarousel from "../components/mainImageCarousel";
import { WheatGold } from './../style/colors';

const Wrapper = styled.div`
    background-color: ${MainPink};
    min-height: 100vh;
    width: 100%;
`;

const TextArea = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding:30px;

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
`

const MainPage: React.FC = () => {
    return (
        <Wrapper>
            <TopBar />
            <ImageCarousel />
            <Navigation />
            <TextArea>
                <Title className='text-5xl'>예히당</Title>
                우리쌀로 만든, 우리 디저트</TextArea>
        </Wrapper>
    );
};

export default MainPage;
