//component should display a div with the task of the todo

import React from "react"

const Todo = ({ task = "default todo", id="1", remove }) => {
    const handleRemove = () => remove(id)
        
    return (
        <div>
            <li>{task} <button onClick={handleRemove}>X</button></li>
        </div>
    )
}

export default Todo