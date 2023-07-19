import React from 'react';
import Header from './componentes/header/index.jsx';
import styled from 'styled-components';
import Pesquisa from './componentes/pesquisa/index.jsx';
import UltimosLancamentos from './componentes/ultimosLancamentos/index.jsx';

const AppContainer = styled.div`  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    display: flex;
    flex-direction: column;
`;


function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
