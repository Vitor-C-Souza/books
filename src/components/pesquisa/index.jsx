import React, { useEffect } from 'react';
import Input from '../input/index.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import { Livros } from '../../services/livros.js';
import { Favorito } from '../../services/favoritos.js';

const PesquisaContainer = styled.main`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: auto;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    border: 1px solid white;
  }
`;

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaAPI = await Livros.getLivros();
    setLivros(livrosDaAPI);
  }

  async function insertFavorito(id) {
    await Favorito.postFavorito(id);
    alert(`Livro de id:${id} inserido!`);
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      
      {livrosPesquisados.map((livro, index) => (
        <Resultado onClick={() => insertFavorito(livro.id)} key={index}>
          <img src={livro.src} />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
      
    </PesquisaContainer>
  );
}
