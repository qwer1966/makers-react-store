import React from 'react';
import Routes from './Routes';
import StoreContextProvider from './contexts/StoreContext';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure();

function App() {
  return (
    <StoreContextProvider>
      <Routes />
    </StoreContextProvider>
  );
}

export default App;
