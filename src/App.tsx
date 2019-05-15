import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme';
import { TicTacToe } from './components';
import './App.css';

render(
  <ThemeProvider theme={theme}>
    <TicTacToe />
  </ThemeProvider>,
  document.getElementById('root')
);
