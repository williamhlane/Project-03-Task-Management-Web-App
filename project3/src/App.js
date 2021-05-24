import './App.css';
import Home from './comps/Home'
import Contact from './comps/Contact'
import Header from './comps/Header'
import Nav from './comps/Nav'
import Todos from './comps/Todos'
import About from './comps/About'
import { BrowserRouter, Route,  useLocation } from 'react-router-dom';
const App = () => {

 
  return (
    <div className='bg-white'>
      <Header />
      <Nav />
      <BrowserRouter>
        
        <Route path='/' exact component={Home} />
        <Route path='/Todos' exact component={Todos} />
        <Route path='/About' exact component={About} />
        <Route path='/Contact' exact component={Contact} />
      </BrowserRouter>

    </div>
  );
}

export default App;