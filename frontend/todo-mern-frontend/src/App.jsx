import { useState, useEffect } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    ( async () => {
      try{
        let res = await fetch("http://localhost:3001/api/")
        let data = await res.json()
        setTodo(data)
      } catch(err){
        console.log(err)
      }
    })
  }, [])
  
  return (
    <div className="App">
      <TodoForm />
      <div className="container__todo">
        {todo.map(e => <TodoItem todo={todo} key={_id} {...e} />)}
      </div>
    </div>
  )
}

export default App
