import React from 'react';
import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola];

export default function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone, index) => (
        <li key={index} className="icone">
          <img src={icone}></img>
        </li>
      ))}
    </ul>
  );
}
