import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const TaskForm = () => {

  const [task, setTask] = useState({
    title:'',
    description:'',
  })

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const tareas = useSelector(state => state.tasks);

  const handleChange = e =>{
    /* console.log(e.target.name, e.target.value); */
    /* Establecer un nuevo valor */
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(task)
    if(params.id){
        dispatch(updateTask(task))
    }else{

    dispatch(addTask({
      /* Copia dee este objeto  (titulo de la descripcion)*/
      ...task,
      id: uuid(),
    }));
  }//if
    navigate('/Tasks');
  };
 
  useEffect(() =>{
    if(params.id){
      setTask(tareas.find(task => task.id === params.id));
    }
  },[params.id, task]);
  
  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
      <label htmlFor='title' className='block text-sm font-bold mb-2'>Task:</label>
      <input name="title" type="text" placeholder='title' 
              onChange={handleChange} value={task.title}
              className='w-full p-2 rounded-md bg-zinc-600 mb-2'
              />
      
      <label htmlFor="description" className='block text-sm font-bold mb-2'>Description:</label>
      <textarea name="description" placeholder='description' onChange={handleChange} 
                value={task.description} className='w-full p-2 rounded-md bg-zinc-600 mb-2'></textarea>
      <button className='bg-indigo-600 px-2 py-1'>Save</button>
    </form>
  )
}

export default TaskForm