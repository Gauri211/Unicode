// import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts :[]
};

export const postsRed = (state=initialState, action) => {

    switch(action.type) {
        // case "ADD_POST" :
        //     return {
        //         ...state,
        //         posts:[...state.posts,action.payload]
        //     }

        case "FETCH_POST" :
            return {
                ...state,
                posts: action.payload
            }
        
        // case "DELETE_POST" : 
        //     const data = state.posts.filter(el => el.id !== action.payload);

        //     return {
        //         ...state,
        //         posts:data
        //     }
            
        default: 
            return state
    }
}



