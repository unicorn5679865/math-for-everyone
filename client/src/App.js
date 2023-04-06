import React from "react"
import Header from "./components/header"
import Footer from "./components/footer";
import MenuContainers from "./components/MenuContainers"


// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createGlobalStyle } from 'styled-components';
import Lesson from "./components/lesson";
import Signin from "./components/signinPage/sign-in";
import NotFound from "./components/ErrorPage/notFound"


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
        <Header />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="*" element={<NotFound />} />
              {/* <MenuContainers /> */}
              {/* <Lesson /> */}
            </Routes>
        </BrowserRouter>
        <Footer />
        </>
    )
}

