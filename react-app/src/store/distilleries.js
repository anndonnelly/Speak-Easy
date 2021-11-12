/*-------------ACTION.TYPES-------------*/
const LOAD_DISTILLERIES = "distillery/LOAD_DISTILLERIES";
const LOAD_ONE_DISTILLERY = "distillery/LOAD_ONE_DISTILLERY";
const CREATE_DISTILLERY = "distillery/CREATE_DISTILLERY";
const UPDATE_DISTILLERY = "distillery/UPDATE_DISTILLERY";
const REMOVE_DISTILLERY = "distillery/REMOVE_DISTILLERY";
/*-------------ACTIONS-------------*/
const load = (distilleries) => ({
    type: LOAD_DISTILLERIES,
    distilleries,
});

const loadOne = (distillery) => ({
    type: LOAD_ONE_DISTILLERY,
    distillery,
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

/*-------------THUNK CREATORS-------------*/
export const loadDistilleries = () => async (dispatch) => {
    const res = await fetch("/api/distilleries");
    if (res.ok) {
        const distilleries = await res.json();
        dispatch(load(distilleries));
    }
};

export const loadOneDistillery = (id) => async (dispatch) => {
    const res = await fetch(`/api/distilleries/${id}`);
    if (res.ok) {
        const distillery = await res.json();
        dispatch(loadOne(distillery));
    }
};

export const createDistillery = (distillery) => async (dispatch) => {
    // const { name, street, city, state, logo } = distillery;
    const res = await fetch("/api/distilleries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(distillery),
    });
    if (res.ok) {
        console.log("hittttt", res)
        const distillery = await res.json();
        dispatch(create(distillery));
        return distillery
    }
};

// TODO update single distillery
export const updateDistillery = (distillery) => async (dispatch) => {
    const res = await fetch(`/api/distilleries/${distillery.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(distillery),
    });
    if (res.ok) {
        const distillery = await res.json();
        dispatch(update(distillery));
    }
};

//TODO delete single distillery
export const deleteDistillery = (distillery) => async (dispatch) => {
    const res = await fetch(`/api/distilleries/${distillery.id}`, {
        method: "DELETE",
    });
    if (res.ok) {
        const distillery = await res.json();
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
        case LOAD_ONE_DISTILLERY: {
            return {
                ...state,
                ...action.distillery,
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
