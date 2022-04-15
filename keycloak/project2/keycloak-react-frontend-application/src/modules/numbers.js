import React from "react";


const LIST_NUMBERS = 'LIST_NUMBERS';
const ADD_NUMBER = 'ADD_NUMBER';

const numbersReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_NUMBER':
            return state = state.push(action.payload.data);

        case 'LIST_NUMBERS':
            return state;
        
        default:
            return state;

    }
};

export default numbersReducer;


export const addNumber = numberValue => {
    return {
        type: ADD_NUMBER,
        payload: {
            data: numberValue,
        }
    }
};

export const listNumbers = () => {
    return {
        type: LIST_NUMBERS,
    }
};