import React from 'react';
import './estilo.css';
import Logo from '../logo/index.jsx';
import OpcoesHeader from '../opcoesHeader/index.jsx';
import IconesHeader from '../iconesHeader/index.jsx';

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />        
    </header>
  );
}
