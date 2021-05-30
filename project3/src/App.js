import './App.css';
import { useState } from 'react'
import Home from './comps/Home'
import Contact from './comps/Contact'
import Header from './comps/Header'
import Nav2 from './comps/Nav2'
import Todos from './comps/Todos'
import About from './comps/About'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



function App() {

  return (
    <div className='bg-white'>
      <Header />

      <BrowserRouter>
        <Nav2 />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Todos' exact component={Todos} />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
