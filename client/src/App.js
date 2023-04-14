import React from "react"
import Header from "./components/header"
import Footer from "./components/footer";
import {AuthContextProvider} from "./contexts/AuthContext";
import {ApiErrorHandler} from "./components/ApiErrorHandler/ApiErrorHandler"


// import { render } from "react-dom";
import { createGlobalStyle } from 'styled-components';

import Router from "./router";


const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 90%;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    width: 100vw;
    height: 100vh;
  }
`;


export default function App() {
    return (
        <>
          <GlobalStyles /> 
          <AuthContextProvider>
            <ApiErrorHandler>
              <Router />
            </ApiErrorHandler>    
          </AuthContextProvider>
        </>
    )
}

