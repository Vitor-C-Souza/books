import React from 'react';
import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
`;

const NovosLivros = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
      <NovosLivros>
        {livros.map((livro, index) => (
          <img src={livro.src} key={index} />
        ))}
      </NovosLivros>
    </UltimosLancamentosContainer>
  );
}
