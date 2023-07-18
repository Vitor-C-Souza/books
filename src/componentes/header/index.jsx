import React from 'react';
import Logo from '../logo/index.jsx';
import OpcoesHeader from '../opcoesHeader/index.jsx';
import IconesHeader from '../iconesHeader/index.jsx';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />        
    </HeaderContainer>
  );
}
