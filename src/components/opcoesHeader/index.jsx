import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

export default function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Link to={`${texto.toLowerCase()}`} key={index}>
          <Opcao key={index}>
            <p>{texto}</p>
          </Opcao>
        </Link>
      ))}
    </Opcoes>
  );
}