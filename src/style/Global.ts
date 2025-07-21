import styled from "@emotion/styled";
import { MainPink } from "./colors";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  background-color: ${MainPink};
  min-height: 100vh;
  width: 100vh;
  overflow: hidden;
  touch-action: none;
`;

export const GlobalStyles = css`
  @font-face {
    font-family: "행복고흥L";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/행복고흥L.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "GenKJwajinOTF-Rg";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GenKJwajinOTF-Rg.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Jeonju_gakR';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Jeonju_gakR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Jaemin';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jaemin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
  }
`;
