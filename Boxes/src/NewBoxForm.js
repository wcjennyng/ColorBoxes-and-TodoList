//component should render a form when submitted to create a new Box.
//can specify Box's width, height, and background color.
//when from is submitted, clear the input values

import React, { useState } from "react"
import { v4 as uuid } from 'uuid'

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    const input = e => {
        e.preventDefault()
        createBox({ ...formData, id: uuid() })
        setFormData({ height: "", width: "", backgroundColor: "" })
    }

    return (
        <>
            <h2>Make a Box!</h2>
            <form onSubmit={input}>
                <div>
                    <label htmlFor="height">Height: </label>
                    <input onChange={handleChange}
                        type="text"
                        name="height"
                        value={formData.height}
                        id="height" />
                </div>
                <div>
                    <label htmlFor="width">Width: </label>
                    <input onChange={handleChange}
                        type="text"
                        name="width"
                        value={formData.width}
                        id="width" />
                </div>
                <div> 
                <label htmlFor="backgroundColor">Background Color: </label>
                    <input onChange={handleChange}
                           type="text"
                           name="backgroundColor"
                           value={formData.backgroundColor}
                           id="backgroundColor" />
                </div>
                
                <button id="newBoxButton">Add a new box</button>
                
            </form>
        </>
    )
}

export default NewBoxForm