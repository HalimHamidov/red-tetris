import styled from "styled-components"


export const Styledisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
  padding: 10px;
  border-radius: 10px;
  border: 4px solid #333;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-size: 0.8 rem;
  position: relative;
  width: 150px;
  height: 70px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  @media screen and (min-width: 2048px) {
    width: 100px;
    height: 102px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 102px;
  }
  @media screen and (max-width: 480px) {
    width: 90px;
    height: 60px;
  }
`
export const StyledNextDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 10px;
  border-radius: 10px;
  border: 4px solid #333;
  color:  '#999';
  background: #000;
  font-size: 0.8 rem;
  position: relative;
  width: 150px;
  height: 132px;
  @media screen and (min-width: 2048px) {
    width: 100px;
    height: 102px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 102px;
  }
  @media screen and (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`

export const StyledTitle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  border-radius: 20px;
  padding: 6px 20px;
  margin: 0px 0px 20px 0px;
  background: #333;
  font-size: 0.8 rem;
  color: white;
  transform: translate(-50%, -50%);
    @media screen and (min-width: 480px) {
    font-size: 12px;
    padding: 5px 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const StyledData = styled.div`
  font-size: xxx-large;
  padding: 6px;
  font-size: 0.8 rem;
  color: white;
  @media screen and (min-width: 2048px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const StyleStage = styled.div`
  display: grid;
  grid-template-rows: repeat( 3, calc(130px / 4));
  grid-template-columns: repeat(4, calc(130px / 4));
  grid-gap: 1px;
  padding: 10px;
  @media screen and (min-width: 2048px) {
    display: grid;
    grid-template-rows: repeat( 3, calc(110px / 5));
    grid-template-columns: repeat(4, calc(110px / 5));
    grid-gap: 2px;
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat( 3, calc(110px / 5));
    grid-template-columns: repeat(4, calc(110px / 5));
    grid-gap: 2px;
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-rows: repeat( 3, calc(70px / 4));
    grid-template-columns: repeat(4, calc(70px / 4));
    grid-gap: 1px;
    padding: 10px;
  }
`;

