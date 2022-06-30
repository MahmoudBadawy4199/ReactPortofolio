import { createStore } from 'redux';


// TYPES
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";



// ACTIONS
export const addTodoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}

export const deleteTodoAction = (payload) => {
    return {
        type: DELETE_TODO,
        payload: payload
    }
}

// INITIAL STATE

const initialState = {
    todos: []
}

// REDUCER
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            // add todo to the state
            return { ...state, todos: [...state.todos, action.payload] };
        case DELETE_TODO:
            // remove todo from the state
            return { ...state, todos: [...state.todos.filter((item,index) =>{return index !== action.payload})] };
        default:
            return state;
    }

}


// STORE
export const store = createStore(
    // todo Reducer
    todoReducer
)