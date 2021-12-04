import React, { useState } from "react"
import { v4 as uuid } from 'uuid'

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState("")

    const handleChange = e => {
        setTask(e.target.value)
    }

    const input = e => {
        e.preventDefault()
        createTodo({ task, id: uuid() })
        setTask("")
    }

    return(
        <>
            <h2>Todo List</h2>
            <div>
                <form onSubmit={input}>
                    <label htmlFor="task">Task: </label>
                    <input id="task"
                           name="task"
                           type="text"
                           onChange={handleChange}
                           value={task}/>
                    <button>Add a todo</button>
                </form>
            </div>
        </>
    )
}

export default NewTodoForm