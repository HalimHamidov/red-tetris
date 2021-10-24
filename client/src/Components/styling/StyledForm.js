import styled from "styled-components"

export const StyledInput = styled.input`
padding: 18px;
border-radius: 8px;
border: 2px solid #8e7cc3;
color: #e06666;
background: #fff;
width: 60%;
min-width: 288px;
font-size: 21px;
::placeholder {
  color: #6aa84f;
}
@media screen and (min-width: 2048px) {
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  font-size: 16px;
}
`;

export const StyledButton = styled.button`
padding: 8px;
border-radius: 8px;
border: 8px groove #6aa84f;
color: #FF0000;
background: #9fc5e8;
font-size: 24px;
margin: 0.8em;
width: 8%;
min-width: 160px;
:hover {
  background: #ffe599;
}
@media screen and (min-width: 2048px) {
  font-size: 18px;
  min-width: 135px;

}
@media screen and (max-width: 768px) {
  font-size: 18px;
  min-width: 135px;

}
@media screen and (max-width: 480px) {
  font-size: 16px;
  min-width: 135px;

}
`;
export const StyledAddnameWrapper = styled.form.attrs({
  "data-testid": "addName-form"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  position: absolute;
  margin: auto;
  width: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 2048px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`

export const RoomWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
top: 30%;
left: 50%;
position: absolute;
transform: translate(-50%, -30%);
@media screen and (min-width: 2048px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 480px) {
}
`

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin: auto;
padding: 10px;
@media screen and (min-width: 2048px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 480px) {
}
`

export const InputsWrapper = styled.div`
display: flex;
align-items: center;
@media screen and (min-width: 2048px) {
  flex-direction: column;
}
@media screen and (max-width: 768px) {
  flex-direction: column;
}
@media screen and (max-width: 480px) {
  flex-direction: column;
}
`

export const StyledSelect = styled.select`
padding: 16px;
border-radius: 8px;
border: 4px ridge #333;
color: #f9cb9c;
background: #000;
margin: 0.5em;
outline: none;
width: 25%;
min-width: 188px;
font-size: 22px;
@media screen and (min-width: 2048px) {
  font-size: 18px;
  width: 95%;
  padding: 15px;
}
@media screen and (max-width: 768px) {
  font-size: 18px;
  width: 95%;
  padding: 15px;
}
@media screen and (max-width: 480px) {
  font-size: 16px;
  width: 80%;
  padding: 15px;
  min-width: 300px;
}
`;

export const TABLE = styled.table`
border-width: 5px;
background: #000;
border-collapse: collapse;
border-spacing: 0;
width: 50%;
border: 1px solid #333;
font-size: 18px;
@media screen and (min-width: 2048px) {
  width: 60%;
}
@media screen and (max-width: 768px) {
  width: 80%;
}
@media screen and (max-width: 480px) {
  width: 100%;
}
`

export const THEAD = styled.thead`
`

export const TBODY = styled.tbody`
`

export const TR = styled.tr`
border-width: 5px;
`
export const TH = styled.th`
`

export const TD = styled.td`
`

export const JoinButton = styled.button`
padding: 12px;
border-radius: 10px;
border: 4px solid #333;
color: #000;
background: #fff;

cursor: pointer;
margin: 0.5em;


:hover {
  background: #333;
  color: #fff;
}

`