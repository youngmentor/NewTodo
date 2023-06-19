import React, { useState, useEffect, useReducer,useRef } from 'react'
import './Todo.css'



function reducer(todos, action) {
    switch (action.type) {
        case 'Add':
            return [...todos, { id: action.payload.id + 1, todo: action.payload.todo, checkers: false }]
        case "checked":
            return action.payload.check
        case "delete":
            return action.payload.delet
        default:
            return todos
    }
}


const Todo = () => {
    const Inpuref = useRef()
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('state')) || [])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    let Total = todos.length
    let completed = 0
    let pending = 0

    todos.map((index) => {
        index.checkers ? completed += 1 : pending += 1
    })
    const handleAddTodo = () => {
        if (!inputValue) return;
        if (editingIndex !== null) {
            // If we are editing a todo, update the existing todo item
            const newTodos = [...todos];
            newTodos[editingIndex] = inputValue;
            setTodos(newTodos);
            setEditingIndex(null);
        } else {
            // Otherwise, add a new todo item to the list
            setTodos([...todos, inputValue]);
        }
        setInputValue("");
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleEditTodo = (index) => {
        setEditingIndex(index);
        setInputValue(todos[index]);
    };
    const setChecked = (index) => {
        const newArr = state.map((i) => i.index === index ? { ...i, checkers: !i.checkers } : { ...i });
        dispatch({ type: "checked", payload: { check: newArr } })
        console.log("checked");
    }


    useEffect(() => {
        // localStorage.setItem('state', JSON.stringify(state));
    }, [state,])
    return (
        <div className='MainTodo'>
            <div className='MainTodoWrap'>
                <h1>Todo List</h1>
                <div className='TodoInput_Wrap'>
                    <input value={inputValue} onChange={handleInputChange} className='TodoInput' placeholder='Add Todo' ref={Inpuref} />
                    <button onClick={handleAddTodo} className='TodoAddBttn'>
                        {editingIndex !== null ? "Save Todo" : "Add Todo"}
                    </button>
                    <p>{Total} Total, {completed} Complete and {pending} Pending</p>
                </div>
                <div className='TodoBody'>
                    {todos.map((todo, index) => (
                        <div className='TodoBodyWrap'>
                            <p key={index} className='TodoList'>{todo}</p>
                            <div className='TodoListBtts'>
                                {editingIndex === index ? (
                                    <input value={inputValue} onChange={handleInputChange} className='TodoInputEdit' />
                                ) : (
                                    null
                                )}
                                <input
                                    className='checked'
                                    type="checkbox"
                                    onChange={() => setChecked(index)}
                                />
                                {editingIndex === index ? (
                                    <button onClick={() => setEditingIndex(null)} className='BttnCn'>Cancel</button>
                                ) : (

                                    <button onClick={() => handleEditTodo(index)} className='BttnEd'>Edit</button>
                                )}
                                <button onClick={() => handleDeleteTodo(index)} className='BttnDe'>Delete</button>
                                {/* <input type="checkbox" /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo