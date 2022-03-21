import axios from 'axios'
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER'
export const GET_USER_ERROR = 'GET_USER_ERROR'

export function updateUser(newUser){
    return {type:UPDATE_USER, payload:{user:newUser}}
}

export function getUser(){
    return async dispatch => {
    
        try {
            const result =await axios.get('https://jsonplaceholder.typicode.com/users/1');
            dispatch(updateUser(result.data.name))
        } catch (error) {
            dispatch(showError(error.message))
        }
    }
}

export function showError(errText){
    return {
        type:GET_USER_ERROR,
        payload:{
            error:errText
        }
    }
}

export function addUser(newUser){
    return{
        type:ADD_USER,
        payload:{
            user:newUser
        }
    }
}