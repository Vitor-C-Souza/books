import React from 'react';
import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../titulo/index.jsx';
import styled from 'styled-components';
import CardRecomenda from '../cardRecomenda/index.jsx';
import imagemLivro from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.footer`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivros = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

const OrganizaCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor={'#000'} tamanhofonte={'36px'}>
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivros>
        {livros.map((livro, index) => (
          <img src={livro.src} key={index} />
        ))}
      </NovosLivros>
      <Titulo cor={'#000'} tamanhofonte={'36px'}>
        RECOMENDAÇÕES
      </Titulo>
      <OrganizaCard>
        <CardRecomenda
          titulo="Talvez você se interesse por"
          subtitulo="Angular 11"
          descricao="Construindo uma aplicação com a plataforma Google"
          img={imagemLivro}
        />
      </OrganizaCard>
    </UltimosLancamentosContainer>
  );
}
