import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  background-color: blue;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const ButtonTab = ({ onButtonClick }) => (
  <ButtonWrapper>
    <button name="down" onClick={onButtonClick}>
      Down
    </button>
    <button name="up" onClick={onButtonClick}>
      Up
    </button>
  </ButtonWrapper>
);

export default ButtonTab;
