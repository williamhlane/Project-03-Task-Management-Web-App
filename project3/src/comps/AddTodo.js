import Button from './Button'

import { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [todoText, setTodoText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!todoText) {
            alert('Please put a Todo in.')
            return
        }
        addTodo({ todoText })
        setTodoText('')
    }
    return (
        <div className="px-10">

            <label className="text-2xl text-red-800">New Task: </label>
            <form onSubmit={onSubmit}>
                <input type='text' className="bg-gray-400 p-2 rounded-2xl"value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <Button doWhat="Add Todo" />
            </form>
        </div>
    )
}
export default AddTodo;