// App.js
import React from 'react';
import Parent from './Parent';
import Child from './Child';
import LifecycleDemo from './LifecycleDemo';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import CounterUseState from './CounterState';
import CounterUseReducer from './CounterReducer';
import JokeFetcher from './Joke';
import FocusForm from './FocusForm';
import ThemeProvider from './ThemeProvider';
import ThemedComponent from './ThemedComponent';
import { ThemeContext } from './ThemeContext';
import FormUseRef from './FormUseRef';
import FormUseState from './FormUseState';
import StyledButtonInline from './StyledBtnInline';
import StyledButtonInternal from './StyledBtnInternal';
import StyledButtonExternal from './StyledBtnExternal';

const App = () => (
  <div>
    <StyledButtonInline />
    <StyledButtonInternal />
    <StyledButtonExternal />
  </div>
);

export default App;
