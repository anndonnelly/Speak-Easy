/*-------------ACTION.TYPES-------------*/
const LOAD_ONE_USER = "user/LOAD_ONE_USER";
/*-------------ACTIONS-------------*/
const loadOne = (user) => ({
    type: LOAD_ONE_USER,
    user,
});
/*-------------THUNK CREATORS-------------*/
export const loadOneUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`);
    if (res.ok) {
        const user = await res.json();
        dispatch(loadOne(user));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};
/*-------------REDUCER-------------*/
const initialState = {};

const users = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ONE_USER:
            return {
                ...state,
                ...action.user,
            };

        default:
            return state;
    }
};

export default users;
