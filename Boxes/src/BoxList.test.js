import React from "react"
import { render, fireEvent } from "@testing-library/react"
import BoxList from "./BoxList"

function addBox(boxList, height = "3", width = "3", color = "blue") {
    const testHeight = boxList.getByLabelText("Height:")
    const testWidth = boxList.getByLabelText("Width:")
    const testBG = boxList.getByLabelText("Background Color:")
    fireEvent.change(testBG, { target: { value: color } })
    fireEvent.change(testWidth, { target: { value: width } })
    fireEvent.change(testHeight, { target: { value: height } })
    const button = boxList.getByText("Add a new box")
    fireEvent.click(button)
}

it('renders without crashing', function () {
    render(<BoxList />)
})

it('matches snapshot', function () {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

it('can add a new box', function () {
    const boxList = render(<BoxList />)
    addBox(boxList)

    const removeButton = boxList.getByText("X")
    expect(removeButton).toBeInTheDocument()

    expect(removeButton.previousSibling).toHaveStyle(`
        height: 3px;
        width: 3px;
        background-color: blue;`)
})

it('can remove a box', function() {
    const boxList = render(<BoxList />)
    addBox(boxList)

    const removeButton = boxList.getByText("X")
    fireEvent.click(removeButton)
    expect(removeButton).not.toBeInTheDocument()
})

