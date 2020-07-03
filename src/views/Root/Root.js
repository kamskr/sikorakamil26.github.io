import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import Main from '../../templates/Main/Main';
//redux
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  </div>
);

export default Root;
