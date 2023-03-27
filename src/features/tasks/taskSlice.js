import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id:"1",
        title:"Task 1",
        description:"Hey! this is your first waiting task ",
        completed:false
    },
    {
        id:"2",
        title:"Task 2",
        description:"Look! this task you have to do now",
        completed:false
    }
]
export const taskSlice = createSlice({
    name:'tasks',
    /* initialState:[], */
    /* initialState:initialState, */
    initialState,
    reducers:{
        addTask:(state, action) =>{
          /*   console.log(state,action) */
            /* state.push(action.type) */
             state.push(action.payload) 
       /*      [...state, action.paylod]  */
        },
        deleteTask:(state,action) => {
           /*  console.log(action.payload) */
           const taskFound = state.find(task => task.id === action.payload)
            if(taskFound ){
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        updateTask:(state,action) => {
            const { id,title,description } = action.payload
            const foundTask = state.find(task => task.id === id)

            if(foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        }

    }
})

export const {addTask, deleteTask, updateTask} = taskSlice.actions
export default taskSlice.reducer



/* El state es para poder acceder al arreglo */
/* Y el action de como esta el dato que le voy a estar pasando*/