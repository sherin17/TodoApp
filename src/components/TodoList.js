import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import './TodoList.css'



const TodoList = () => {

    //useState
    var [todo, settodo] = useState('')
    var [todos, settodos] = useState([])


    //ADD
    const addtodo = () => {
        if (todo !== '') {
            settodos([...todos, todo])
            settodo('')
        }
    }

    return (
        <div className='container'>
            <Container maxWidth="lg" align='center'>
                <h1>TODO LIST</h1>
                <form className='form-group'>
                    <TextField type="text" value={todo} label="Enter Your TODO" variant="outlined" fullWidth onChange={(event) => settodo(event.target.value)}></TextField>
                    <Button variant="contained" color='error' onClick={addtodo}>ADD</Button>
                </form>
                    <ol>
                        {todos.map((to) => (<li>{to}</li>))}
                    </ol>
            </Container>
        </div>
    )
}

export default TodoList

