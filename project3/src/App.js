import './App.css';
import { useState } from 'react'
import Home from './comps/Home'
import Contact from './comps/Contact'
import Header from './comps/Header'
import Nav from './comps/Nav'
import Todos from './comps/Todos'
import About from './comps/About'

import { BrowserRouter, Route,  useLocation } from 'react-router-dom';


function App() {


 //TABS SOMETHING LIKE THIS useLocation: about ? bg-black : bg-white

  return (
    <div className='bg-white'>
      <Header />
      <BrowserRouter>
        <Nav />
          
        <Route path='/' exact component={Home} />
        <Route path='/Todos' exact component={Todos} />
        <Route path='/About' exact component={About} />
        <Route path='/Contact' exact component={Contact} />
      </BrowserRouter>

    </div>
  );
}

export default App;
