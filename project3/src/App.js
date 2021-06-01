import './App.css';
import Home from './comps/Home'
import Contact from './comps/Contact'
import Header from './comps/Header'
import Nav2 from './comps/Nav2'
import Todos from './comps/Todos'
import About from './comps/About'
import AddTodo from './comps/AddTodo'
import { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'This is the first on the Todo list',
      completed: false,
      showActive: true,
      showCompleted: false,
    },
    {
      id: 2,
      text: 'This is the second on the todo list',
      completed: false,
      showActive: true,
      showCompleted: false,
    },
    {
      id: 3,
      text: 'This is the Third on the todo list',
      completed: false,
      showActive: true,
      showCompleted: false,
    },
    {
      id: 4,
      text: 'This is the Forth on the todo list',
      completed: true,
      showActive: true,
      showCompleted: false,
    },

  ])
  const whatToShow = (active, completed) => {
    setTodos(todos.map((todo) => true ? { id: todo.id, text: todo.text, completed: todo.completed, showActive: active, showCompleted: completed } : null))
  }
  const addTodo = (todo) => {
    let showActive = true
    let showCompleted = false
    let f = false
    if (todos.length > 0) {
      todos.map((todo) => (
        showActive = todo.showActive
      ))
      todos.map((todo) => (
        showCompleted = todo.showCompleted
      ))
    }
    let id = todos.length + 1
    let text = todo.todoText

    const newTodo = { id, text, f, showActive, showCompleted }
    setTodos([...todos, newTodo])



  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const todoCompleted = (id, propCompleted) => {
    propCompleted = !propCompleted
    setTodos(todos.map((todo) =>
      todo.id === id ? { id: todo.id, text: todo.text, completed: propCompleted, showActive: todo.showActive, showCompleted: todo.showCompleted } : todo))
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
              () => <> <Todos todos={todos} toDelete={deleteTodo} toLength={todos.length} todoComp={todoCompleted}
                whatToShow={whatToShow} /> <AddTodo addTodo={addTodo} /> </>
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
