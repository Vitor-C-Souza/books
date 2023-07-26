import React from 'react';
import styled from 'styled-components';
import Pesquisa from '../componentes/pesquisa/index.jsx';

const AppContainer = styled.div`  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    display: flex;
    flex-direction: column;
`;


function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
