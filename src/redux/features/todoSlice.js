import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE

const initialState = {
    todos: []
}

export const todoSlice = createSlice ({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state,action) =>
        {
           state.todos = state.todos.filter(
            (item,index)=>index !== action.payload
            
            );
        },
    }
});


export const {addTodo,deleteTodo} = todoSlice.actions; 