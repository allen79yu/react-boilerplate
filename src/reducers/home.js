const home = (state = {userName:　''}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                init: action.init
            };
        case "INPUT_USER_NAMES":
            return Object.assign({}, state, {
                userName: action.userName
            });
        default:
            return state;
    }
};

export default home;
