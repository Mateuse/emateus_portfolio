import React from 'react'

import { About, Footer, Header, Skills, Work, Projects } from "./container";
import { Navbar, SocialMedia} from "./components";

import './app.scss';

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <SocialMedia type="page"/>
        <Header />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Footer />
    </div>
  )
}

export default App;
