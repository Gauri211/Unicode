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
