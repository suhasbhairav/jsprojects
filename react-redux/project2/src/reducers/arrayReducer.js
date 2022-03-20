const arrayReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            console.log(action.payload);
            return [...state, action.payload];
    
        case 'REMOVE':
            const num = state.length;
            return state.filter(item => state.indexOf(item) !== num - 1);

        default:
            return state;
    }
}

export default arrayReducer;