/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import data from "./data.json";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15% 10%;
  display: flex;
  flex-direction: column;
  gap: 2%;
  background: linear-gradient(to bottom, gray 0%, white 40%);
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
      <div style={{ paddingBottom: "20%" }}>
        <Title style={{ color: "white", textAlign: "center" }}>
          {data.companyInfo.title}
        </Title>
        <Desc style={{ color: "white", textAlign: "center" }}>
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
    </Wrapper>
  );
}

export default SecondPage;
