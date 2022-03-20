export const addElement = (num) => {
    return {
        type: "ADD",
        payload: num
    };
};

export const removeElement = () => {
    return {
        type: "REMOVE"
    }
};