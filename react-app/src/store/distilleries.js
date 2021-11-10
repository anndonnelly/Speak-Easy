/*-------------ACTION.TYPES-------------*/
const LOAD_DISTILLERIES = "distillery/LOAD_DISTILLERIES";
const LOAD_ONE_DISTILLERY = "distillery/LOAD_ONE_DISTILLERY";
/*-------------ACTIONS-------------*/
const load = (distilleries) => ({
    type: LOAD_DISTILLERIES,
    distilleries,
});

const loadOne = (distillery) => ({
    type: LOAD_ONE_DISTILLERY,
    distillery,
});
/*-------------THUNK CREATORS-------------*/
export const loadDistilleries = () => async (dispatch) => {
    const res = await fetch("/api/distilleries");

    if (res.ok) {
        const distilleries = await res.json();
        dispatch(load(distilleries));
        return distilleries;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};
// TODO Load one base on ID
export const loadOneDistillery = (id) => async (dispatch) => {
    const res = await fetch(`/api/distilleries/${id}`);
    if (res.ok) {
        const distillery = await res.json();
        dispatch(loadOne(distillery));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

// TODO update single distillery

//TODO delete single distillery
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
                ...action.distillery, //this may not work
            };
        }
        default:
            return state;
    }
};

export default distilleries;
