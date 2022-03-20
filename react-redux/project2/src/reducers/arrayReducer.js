import { ActionTypes } from "../constants";

const arrayReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD:
            console.log(action.payload);
            return [...state, action.payload];
    
        case ActionTypes.REMOVE:
            const num = state.length;
            return state.filter(item => state.indexOf(item) !== num - 1);

        default:
            return state;
    }
}

export default arrayReducer;