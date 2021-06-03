import React from 'react';
import Routes from './Routes';
import StoreContextProvider from './contexts/StoreContext';

function App() {
  return (
    <StoreContextProvider>
      <Routes />
    </StoreContextProvider>
  );
}

export default App;
