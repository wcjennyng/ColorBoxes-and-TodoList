import React from "react"
import { render, fireEvent } from "@testing-library/react"
import TodoList from "./TodoList"

function addTodo(todoList, task = "test") {
    const taskInput = todoList.getByLabelText("Task:")
    fireEvent.change(taskInput, { target: { value: task } })
    const submitButton = todoList.getByText("Add a todo")
    fireEvent.click(submitButton)
}

it("renders without crashing", function () {
    render(<TodoList />);
})

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it('can add a todo', function() {
    const list = render(<TodoList />)
    addTodo(list)

    expect(list.getByLabelText("Task:")).toHaveValue("")
    expect(list.getByText("X")).toBeInTheDocument()
})

it('can delete a todo', function() {
    const list = render(<TodoList />)
    addTodo(list)

    const removeButton = list.getByText("X")
    fireEvent.click(removeButton)
    expect(removeButton).not.toBeInTheDocument()
})