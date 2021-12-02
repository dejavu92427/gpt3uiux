import React from "react";
import { Article, Feature, Nav, Cta, Brand } from "./components";
import { Blog, Features, WhatGPT3, Header, Footer, Possibility } from "./container";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <div className="gradient_bg">
          <Nav />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
