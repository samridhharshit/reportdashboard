const initState = {}

const rootReducers = (state = initState, action) => {
    // console.log(action)
    if (action.type === 'MOUNT_USER') {
        console.log(action)
        return {
            ...state,
            user: action.userData
        };
        // console.log(state);
    }
    return state;
};

export default rootReducers;