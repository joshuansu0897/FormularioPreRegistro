import React from "react";
import styled from "styled-components";


export const DatePicker = () => {


    return(
        <DatePickerContainer className="animated fadeIn">
            <InputItem type={"date"} />
        </DatePickerContainer>
    )
}


const DatePickerContainer = styled.div`
  width: 100%;
  height: 110px;
  padding: 15px 0;
`;

const InputItem = styled.input`
  border-inline: none;
  outline: none;
  border: 0;
  font-size: calc(10px + 1vmin);
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.pattensBlue};
  padding: 15px;
  border-radius: 4px;
  width: 100%;

  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: ${ props => props.theme.placeHolder }
  }
`;