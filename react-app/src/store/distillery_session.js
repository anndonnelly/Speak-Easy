/*-------------ACTION.Types-------------*/
const SET_DISTILLERY = "distillery_session/SET";
const REMOVE_DISTILLERY = "distillery_session/REMOVE";

/*-------------ACTIONS-------------*/
const setDistillery = (distillery) => ({
    type: SET_DISTILLERY,
    distillery,
});

const removeDistillery = () => ({
    type: REMOVE_DISTILLERY,
});
/*-------------THUNK CREATORS-------------*/

export const authenticateDistillery = () => async (dispatch) => {
    const res = await fetch("/api/distilleries/auth", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.ok) {
        const data = await res.json();
        if (data.erros) {
            return;
        }
        dispatch(setDistillery(data));
    }
};

export const loginDistillery = (email, password) => async (dispatch) => {
    const res = await fetch("/api/distilleries/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(setDistillery(data));
        return null;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const logoutDistillery = () => async (dispatch) => {
    const res = await fetch("/api/distilleries/auth/logout", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.ok) {
        dispatch(removeDistillery());
    }
};

export const signupDistillery =
    (name, email, password, street, city, state, logo) => async (dispatch) => {
        const res = await fetch("/api/distilleries/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                street,
                city,
                state,
                logo,
            }),
        });

        if (res.ok) {
            const data = await res.json();
            dispatch(setDistillery(data));
            return null;
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
const initialState = { distilleries: null };

const distilleriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISTILLERY: {
            return { distilleries: action.distillery };
        }
        case REMOVE_DISTILLERY: {
            return { distilleries: null };
        }
        default:
            return state;
    }
};
export default distilleriesReducer;
