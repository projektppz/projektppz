import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.footer`
    height: 80px;
    background-color: ${colors.orange};
    position: fixed;
    width: 100%;
    bottom: 0;
`;

export const Footer = () => {
  return (
    <Wrapper>
      Losowa stopka
    </Wrapper>
  );
};
