import React from 'react';
import Header from './componentes/header/index.jsx';
import styled from 'styled-components';
import Pesquisa from './componentes/pesquisa/index.jsx';

const AppContainer = styled.div`  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);  
`;


function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
