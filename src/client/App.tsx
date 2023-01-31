import React from 'react';
import Main from './pages/Main';

import { StyleGuideProvider } from './styles';
import NoSSR from './components/build/wrap/NoSSR'; // TODO IMPOT FROM STYLEGIDE

export const App = () => {
  return (
    <StyleGuideProvider>
        <Main />
    </StyleGuideProvider>
  );
};

export default App;
