import React from 'react';
import perfil from '../../image/perfil.svg';
import sacola from '../../image/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li` 
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

export default function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone, index) => (
        <Icone key={index}>
          <img src={icone}/>
        </Icone>
      ))}
    </Icones>
  );
}
