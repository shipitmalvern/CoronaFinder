import {createStore } from "redux"

const initialState ={
    //We will use this store all the stuff we need to retain into the store 
    questions: [],
    answers: []
}

function rootReducer(state, action){
    console.log(action.type)
    switch(action.type){
        default:
            return state
    }
}

export default function configureStore(){
    const store = createStore(rootReducer, initialState)
    return store;
}