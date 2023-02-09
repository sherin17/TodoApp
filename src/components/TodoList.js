import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import './TodoList.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';


const TodoList = () => {

//useState
    var [todo, settodo] = useState('')
    var [todos, settodos] = useState([])
    var [editId,seteditId] = useState(0)

//ADD
    const addtodo = () => {
        if(todo !==''){
            settodos([...todos, {list : todo , id : Date.now()}])
            settodo('')
        }
        if(editId){
            const editTodo = todos.find((todo) => todo.id === editId)
            const updateTodo = todos.map((to)=> to.id===editTodo.id
            ? (to={id:to.id , list : todo})
            : (to = {id : to.id , list: to.list}))
            settodos(updateTodo);
            seteditId(0);
            settodo("");
        }
    }

//DELETE
    const onDelete = (id) => {
        settodos(todos.filter((to) => to.id !== id))
    }

//EDIT
    const onEdit = (id) =>{
      const editTodo =  todos.find((to)=> to.id === id)
      settodo(editTodo.list)
      seteditId(editTodo.id)
    } 

    return (
        <div className='container'>
            <Container maxWidth="lg" align='center'>
                <h1>TODO LIST</h1>
                <form className='form-group'>
                    <TextField type="text" value={todo} label="Enter Your TODO" variant="outlined" fullWidth onChange={(event) => settodo(event.target.value)}></TextField>
                    <Button variant="contained" color='error' onClick={addtodo}>{editId ? 'EDIT' : 'ADD'}</Button>
                </form>
                <div className='list'>
                    <ol>
                        {
                            todos.map((to) => (
                                <li className='listitems'>
                                    <div className='list-item-list'>{to.list}</div>
                                    <span>
                                        <BorderColorOutlinedIcon className='icons' id='edit' title="Edit" onClick={()=>onEdit(to.id)}/>
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

