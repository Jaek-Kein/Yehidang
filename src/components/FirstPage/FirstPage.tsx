import styled from "@emotion/styled"


const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
`
const BackgroundImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: linear-gradient(to bottom, gray 0%, white 40%);
    z-index: 0;
    img{
        height: 50%;    
        width: auto;
    }
`
const LogoWrapper = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
`

const Title = styled.h1`
    font-size: 8rem;
    font-family: "행복고흥L";
    font-weight: normal;
    background-color: #ffffff47;
`
const Desc = styled.p`
    font-size: 18px;
    font-family: "GenKJwajinOTF-Rg";
    background-color: #ffffff47;
`

function FirstPage() {
    return(
        <Wrapper>
            <BackgroundImage>
                <img src="Background.jpg"/>
            </BackgroundImage>
            <LogoWrapper>
                <Title>예히당</Title>
                <Desc>우리쌀로 만든 우리 과자</Desc>
            </LogoWrapper>
        </Wrapper>
    )
}

export default FirstPage