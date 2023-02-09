import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import './TodoList.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const TodoList = () => {

    //useState
        var [todo, settodo] = useState('')
        var [todos, settodos] = useState([])
       
    
    //ADD
        const addtodo = () => {
            if(todo !==''){
                settodos([...todos,  {list : todo , id : Date.now()}])
                settodo('')
            }
            
        }
    
//DELETE
    const onDelete = (id) => {
    settodos(todos.filter((to) => to.id !== id))
  }
    
    return (
        <div className='container'>
            <Container maxWidth="lg" align='center'>
                <h1>TODO LIST</h1>
                <form className='form-group'>
                    <TextField type="text" value={todo} label="Enter Your TODO" variant="outlined" fullWidth onChange={(event) => settodo(event.target.value)}></TextField>
                    <Button variant="contained" color='error' onClick={addtodo}>ADD</Button>
                </form>
                <div className='list'>
                    <ol>
                        {
                            todos.map((to) => (
                                <li className='listitems'>
                                <div className='list-item-list'>{to.list}</div>
                                <span>
                                    <DeleteOutlineIcon className='icons' id='delete' title="Delete" onClick={()=>onDelete(to.id)}/>
                                </span>
                            </li>
                            ))
                        }
                    </ol>
                </div>
            </Container>
        </div>
    )
}

export default TodoList

