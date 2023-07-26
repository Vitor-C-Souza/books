import React from 'react';
import Logo from '../logo/index.jsx';
import OpcoesHeader from '../opcoesHeader/index.jsx';
import IconesHeader from '../iconesHeader/index.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}
