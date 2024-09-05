import * as api from '../../api/axios';

export const ADD = (item) => {
    return {
        type: "ADD_POST",
        payload: item
    }
}

export const DELETE = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}

export const GET_POSTS = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
// console.log(data)
        dispatch({ type: 'FETCH_POSTS', payload: data })
    } catch (error) {
        console.log(error);
    }
}
