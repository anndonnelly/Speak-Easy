// import { createSelector } from "@reduxjs/toolkit";

/*-------------ACTION.TYPES-------------*/
const LOAD_DISTILLERIES = "distillery/LOAD_DISTILLERIES";
const CREATE_DISTILLERY = "distillery/CREATE_DISTILLERY";
const UPDATE_DISTILLERY = "distillery/UPDATE_DISTILLERY";
const REMOVE_DISTILLERY = "distillery/REMOVE_DISTILLERY";
/*-------------ACTIONS-------------*/
const load = (distilleries) => ({
    type: LOAD_DISTILLERIES,
    distilleries,
});

const create = (distillery) => ({
    type: CREATE_DISTILLERY,
    distillery,
});

const update = (distillery) => ({
    type: UPDATE_DISTILLERY,
    distillery,
});

const remove = (distillery) => ({
    type: REMOVE_DISTILLERY,
    distillery,
});
/*-------------MEMOIZED SELECTORS-------------*/

/*-------------THUNK CREATORS-------------*/
export const loadDistilleries = () => async (dispatch) => {
    const res = await fetch("/api/distilleries");
    if (res.ok) {
        const distilleries = await res.json();
        dispatch(load(distilleries));
    }
};

export const createDistillery = (distillery) => async (dispatch) => {
    const res = await fetch("/api/distilleries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(distillery),
    });
    if (res.ok) {
        const distillery = await res.json();
        // console.log("hittttt", distillery);
        dispatch(create(distillery));
        return distillery;
    }
};

export const updateDistillery = (distilleryId, payload) => async (dispatch) => {
    const res = await fetch(`/api/distilleries/${distilleryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (res.ok) {
        const distillery = await res.json();
        dispatch(update(distillery));
    }
};

export const deleteDistillery = (distilleryId) => async (dispatch) => {
    const res = await fetch(`/api/distilleries/${distilleryId}`, {
        method: "DELETE",
    });
    if (res.ok) {
        const distillery = await res.json();
        console.log(distillery)
        dispatch(remove(distillery));
    }
};
/*-------------REDUCER-------------*/
const initialState = {};

const distilleries = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DISTILLERIES: {
            return {
                ...state,
                ...action.distilleries,
            };
        }
        case CREATE_DISTILLERY:
        case UPDATE_DISTILLERY: {
            return {
                ...state,
                [action.distillery.id]: action.distillery,
            };
        }
        case REMOVE_DISTILLERY: {
            const newState = { ...state };
            delete newState[action.distillery.id];
            return newState;
        }
        default:
            return state;
    }
};

export default distilleries;
