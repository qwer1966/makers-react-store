import React from 'react';
import Routes from './Routes';
import StoreContextProvider from './contexts/StoreContext';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ConfirmProvider } from 'material-ui-confirm';

toast.configure();

function App() {
  return (
    <ConfirmProvider>
      <StoreContextProvider>
        <Routes />
      </StoreContextProvider>
    </ConfirmProvider>
  );
}

export default App;
