import React from 'react';
import './estilo.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export default function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto, index) => (
        <li key={index} className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}
