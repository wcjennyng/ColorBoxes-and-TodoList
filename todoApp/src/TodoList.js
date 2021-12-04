//component should render the NewTodoForm component
//should render list of Todo components

import React, { useState }  from "react"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"


const TodoList = () => {
    const [todos, setTodos] = useState([])

    //add a new todo
    const add = newTodo => {
        setTodos(todos => [...todos, newTodo])
    }

    //delete a todo by id
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const todoComponents = todos.map(todo => (
        <Todo   
            remove={remove}
            id={todo.id}
            task={todo.task}
        />
    ))

    return (
        <div>
            <NewTodoForm createTodo={add} />
            <ul>{todoComponents}</ul>
        </div>
    )
}

export default TodoList
