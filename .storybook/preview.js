import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';
//redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';

addDecorator((story) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>{story()}</Provider>
    </ThemeProvider>
  </Fragment>
));
