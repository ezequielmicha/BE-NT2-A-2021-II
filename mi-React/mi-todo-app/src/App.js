import './App.css';
import { useState } from "react";
import Todo from "./components/Todo"
import Button from './components/Button';
import Counter from './components/Counter';


function App() {
  const [todos, updateTodos] = useState([
  ])

  const addTodo = () => {
    const title = prompt("Add a todo item: ")
    if (title){
      const todo = {
        id: new Date().getTime(),
        title,
        checked: false
      }
      updateTodos([...todos, todo])
    }
  }

  const eraseTodo = (todo) => {
    updateTodos(todos.filter(td => td.id != todo.id))
  }

  const checkCallback = (todo) => {
    updateTodos(todos.map(td => (todo.id === td.id) ? todo: td))
  }
  
  const countUnchecked = () => { 
    return todos.filter(item => !item.checked).length
  }
  
  return (
    <div className="container center">
      <h1 className="center title">TODO APP</h1>
      <h3 className="center title">by Ezequiel Micha</h3>
      
      <div className="flow-right controls">
        <Counter title="Item count:" id="item-count" tag={todos.length} />
        <Counter title="Unchecked item count:" id="unchecked-count" tag={countUnchecked()} />
      </div>
      
      <Button className="button center" callback={addTodo} tag="Add Task" />
      
      <ul id="todo-list" className="todo-list"> 
        {
          todos.map(item => (<Todo key={item.id} todo={item} eraseCallback={eraseTodo} checkCallback={checkCallback} />))
        }
      </ul>
    
    </div>
  );
}

export default App;
