import React from "react";
import Button from "../Button";

export default ({todo, eraseCallback, checkCallback}) => {
    return (
        <li className="todo-container">
            <input type="checkbox" checked={todo.checked} onChange={() => checkCallback({...todo, checked: !todo.checked})} /> 
            <span> {todo.title}</span> 
            <Button className="todo-delete" callback={() => eraseCallback(todo)} tag="Erase" />
        </li>
    )
}