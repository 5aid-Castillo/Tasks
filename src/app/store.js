import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
/* ConfigureStore lo que hace es devolvernos un objeto  y vamos a poder dividir nuestro estado en multiples archivos*/
/*  */
export const store = configureStore({
    reducer:{
        tasks:taskReducer
    }
})

