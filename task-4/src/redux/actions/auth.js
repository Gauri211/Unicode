import * as api from '../../api/axios';

export const register = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);

        dispatch({ type: 'AUTH', data});

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}