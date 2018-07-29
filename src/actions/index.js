//general action
export const init = () => ({
    type: "INIT",
    init: true
});

export const inputUserName = userName => ({
    type: "INPUT_USER_NAMES",
    userName: userName
});
