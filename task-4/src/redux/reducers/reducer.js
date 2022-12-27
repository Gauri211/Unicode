// import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts :[]
};

export const postsRed = (state=initialState, action) => {

    switch(action.type) {
        case "ADD_POST" :
            return {
                ...state,
                posts:[...state.posts,action.payload]
            }
        
        default: 
            return state
    }
}



