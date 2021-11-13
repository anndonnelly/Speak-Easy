//CONSTANTS
const GET_CHECKINS = "checkins/LOAD";
const ADD_CHECKIN = "checkins/ADD";
const EDIT_CHECKIN = "checkins/EDIT";
const DELETE_CHECKIN = "checkins/DELETE";

//ACTION CREATORS
const getCheckinsAction = (checkins) => {
    return {
        type: GET_CHECKINS,
        checkins,
    };
};

const addCheckinAction = (checkin) => {
    return {
        type: ADD_CHECKIN,
        checkin,
    };
};

const editCheckinAction = (checkin) => {
    return {
        type: EDIT_CHECKIN,
        checkin,
    };
};

const deleteCheckinAction = (checkin) => {
    return {
        type: DELETE_CHECKIN,
        checkin,
    };
};

//THUNKS
export const getCheckinsThunk = () => async (dispatch) => {
    const response = await fetch("/api/checkins");
    if (response.ok) {
        let checkins_obj = await response.json();
        dispatch(getCheckinsAction(checkins_obj));
    } else {
        return { ok: false };
    }
};

export const createCheckinsThunk = (checkin) => async (dispatch) => {

    const formData = new FormData()
    formData.append("review", checkin.review)
    formData.append("rating", checkin.rating)
    formData.append("location", checkin.location);
    formData.append("drink_name", checkin.drink_name);
    formData.append("drink_id", checkin.drink_id)
    formData.append("distillery_id", checkin.distillery_id)
    const res = await fetch("/api/checkins/new", {
        method: "POST",
        body: formData
    });
    if (res.ok) {
        let newCheckin = await res.json();
        dispatch(addCheckinAction(newCheckin));
        // getting all actions and turning it into a payload
    } else {
        //handle errors
    }
};

export const editCheckinsThunk = (id, checkin) => async (dispatch) => {
    const res = await fetch(`/api/checkins/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(checkin),
    });

    if (res.ok) {
        let editCheckin = await res.json();
        dispatch(editCheckinAction(editCheckin));
    } else {
        //handle errors
    }
};

export const deleteCheckinsThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/checkins/${id}`, { method: "DELETE" });
    if (response.ok) {
        dispatch(deleteCheckinAction(id));
    } else {
        //error stuff
    }
};

//REDUCER
const initialState = {};
export default function checkinsReducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_CHECKINS:
            const allCheckins = {};
            Object.values(action.checkins).forEach((checkin) => {
                allCheckins[checkin.id] = checkin;
            });
            return { ...state, ...allCheckins };
        case ADD_CHECKIN:
            newState[action.checkin.id] = action.checkin;
            return newState;
        case EDIT_CHECKIN:
            newState[action.checkin.id] = action.checkin;
            return newState;
        case DELETE_CHECKIN:
            delete newState[action.checkin];
            return newState;
        default:
            return state;
    }
}

// normalizing data inside reducer
