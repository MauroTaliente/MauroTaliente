import React from 'react';
import Main from './pages/Main';

import { StyleGuideProvider } from './styles';

export const App = () => {
  return (
    <StyleGuideProvider>
        <Main />
    </StyleGuideProvider>
  );
};

export default App;
