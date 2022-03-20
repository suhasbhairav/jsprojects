import { ActionTypes } from "../constants";

export const addElement = (num) => {
    return {
        type: ActionTypes.ADD,
        payload: num
    };
};

export const removeElement = () => {
    return {
        type: ActionTypes.REMOVE
    }
};