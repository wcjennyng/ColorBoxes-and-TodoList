//displays div with a background color, width, and height based on props passeed

import React from "react"

const Box = ({id, handleRemove, width, height, backgroundColor}) => {
    const remove = () => handleRemove(id)
    
    return (
        <>
            <div style={{ height: `${height}px`, width: `${width}px`, backgroundColor }} />
            <button onClick={remove}>X</button>
        </>
    )
}

export default Box