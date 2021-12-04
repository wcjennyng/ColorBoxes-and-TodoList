//state containing all of the boxes
//Component should render all of the Box components along with the NewBoxForm components

import React, { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj])
    }
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const boxComponents = boxes.map(box => (
        <Box
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ))

    return (
        <div>
            <NewBoxForm createBox={add} />
            {boxComponents}
        </div>
    )
}

export default BoxList

