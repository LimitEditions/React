const initialState = {
    count: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
        case "DCREMENT":
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default counter;