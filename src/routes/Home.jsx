import React from 'react';
import styled from 'styled-components';
import Pesquisa from '../components/pesquisa/index.jsx';
import UltimosLancamentos from '../components/ultimosLancamentos/index.jsx';

const AppContainer = styled.div`  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    display: flex;
    flex-direction: column;
`;


function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
