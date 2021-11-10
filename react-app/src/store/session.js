/*-------------ACTION.TYPES-------------*/
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

/*-------------ACTIONS-------------*/
const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

const removeUser = () => ({
    type: REMOVE_USER,
});

/*-------------THUNK CREATORS-------------*/
export const authenticate = () => async (dispatch) => {
    const response = await fetch("/api/users/auth/", {
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(setUser(data));
    }
};

export const login = (email, password) => async (dispatch) => {
    const response = await fetch("/api/users/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const logout = () => async (dispatch) => {
    const response = await fetch("/api/users/auth/logout", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        dispatch(removeUser());
    }
};

export const signUp = (username, email, password) => async (dispatch) => {
    const response = await fetch("/api/users/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data));
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

/*-------------REDUCER-------------*/
const initialState = { user: null };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload };
        case REMOVE_USER:
            return { user: null };
        default:
            return state;
    }
}
