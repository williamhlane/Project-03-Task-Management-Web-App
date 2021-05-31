import './App.css';
import Home from './comps/Home'
import Contact from './comps/Contact'
import Header from './comps/Header'
import Nav2 from './comps/Nav2'
import Todos from './comps/Todos'
import About from './comps/About'
import { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Todo 1',
        },
        {
            id: 2,
            text: 'Todo 2',            
        }

])
const deleteTodo = (id) => {
  
  console.log(id);
} 
  return (
    <div className='bg-white'>
      <Header />

      <BrowserRouter>
        <Nav2 />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Todos' exact 
            component={
              () => <Todos todos={todos} toDelete={deleteTodo} />
            } />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
