import styled from "styled-components";

export const StyleStage = styled.div `
  position: relative;
  display: grid;
  grid-template-rows: repeat(20, calc(499px / 20));
  grid-template-columns: repeat(10, calc(1002px / 40));
  grid-gap: 1px;
  border: 4px solid #DC143C;
  background: #777;
  width: 518px/2;
  height: 1024px/2;
  @media screen and (min-width: 2048px) {
    grid-template-rows: repeat(20, calc(299px / 10));
    grid-template-columns: repeat(10, calc(602px / 20));
    width: 320px;
    height: 624px;
  }
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(20, calc(299px / 10));
    grid-template-columns: repeat(10, calc(602px / 20));
    width: 320px;
    height: 624px;
  }
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(20, calc(199px / 10));
    grid-template-columns: repeat(10, calc(401px / 20));
    width: 220px;
    height: 424px;
  }
`;

export const StyledOverlay = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333333;
  z-index: 2;
  outline: 4px solid #333333;
  opacity: 0.9;
`

export const StyledOverlayText = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 1px;
  font-size: 25px;
  align-items: center;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  h1 {
    color: white;
    font-family: "Lato";
    font-size: 18px;
    text-shadow: none;
    text-align: center;
    font-weight: bolder;
    padding: 50px 0px 50px;
    letter-spacing: 3px;
  }
  p {

  }
  @media screen and (min-width: 2048px) {
    h1 {
      color: white;
      font-family: "Lato";
      font-size: 18px;
      text-shadow: none;
      text-align: center;
      font-weight: bolder;
      padding: 50px 0px 50px;
      letter-spacing: 3px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      color: white;
      font-family: "Lato";
      font-size: 18px;
      text-shadow: none;
      text-align: center;
      font-weight: bolder;
      padding: 50px 0px 50px;
      letter-spacing: 3px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      color: white;
      font-family: "Lato";
      font-size: 18px;
      text-shadow: none;
      text-align: center;
      font-weight: bolder;
      padding: 50px 0px 50px;
      letter-spacing: 3px;
      font-size: large;
    }
  }
`
export const StyledSpecter = styled.div `
  text-align: center;  
`