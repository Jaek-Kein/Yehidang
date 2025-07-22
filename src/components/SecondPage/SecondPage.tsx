/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import data from "./data.json";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10% 10%;
  display: flex;
  flex-direction: column;
  gap: 2%;
  background: linear-gradient(to bottom, gray 0%, white 40%);
`;

const ImageContainer = styled.div`
  width: auto;
  min-height: 250px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    height: 300px;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  overflow-y: scroll;
`;

const Title = styled.div`
  font-family: "Jeonju_gakR";
  font-size: 22px;
  padding-bottom: 3%;
`;

const Desc = styled.div`
  font-size: 16px;
  font-family: "GangwonEdu_OTFBoldA";
  color: black;
`;

// const gradient = css`
//   background: linear-gradient(to Bottom, white 70%, black 100%);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

function SecondPage() {
  return (
    <Wrapper>
      <ImageContainer>
        <img src="image1.jpg" />
      </ImageContainer>
      <TextContainer>
        <div style={{ marginBottom: "5%" }}>
          <Title style={{ textAlign: "center" }}>
            {data.companyInfo.title}
          </Title>
          <Desc style={{ textAlign: "center" }}>
            {data.companyInfo.description}
          </Desc>
        </div>
        <div>
          <Title>{data.features[0].title}</Title>
          <Desc>{data.features[0].description}</Desc>
        </div>
        <div>
          <Title>{data.features[1].title}</Title>
          <Desc>{data.features[1].description}</Desc>
        </div>
        <div>
          <Title>{data.features[2].title}</Title>
          <Desc>{data.features[2].description}</Desc>
        </div>
      </TextContainer>
    </Wrapper>
  );
}

export default SecondPage;
