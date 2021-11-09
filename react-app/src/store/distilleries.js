/*-------------ACTION.TYPES-------------*/
const LOAD_DISTILLERIES = "distillery/LOAD_DISTILLERIES";
/*-------------ACTIONS-------------*/
const load = (distilleries) => ({
    type: LOAD_DISTILLERIES,
    distilleries,
});
/*-------------THUNK CREATORS-------------*/
export const loadDistilleries = () => async (dispatch) => {
    const res = await fetch("/api/distilleries");

    if (res.ok) {
        const distilleries = await res.json();
        dispatch(load(distilleries));
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

// TODO update single distillery

//TODO delete single distillery
/*-------------REDUCER-------------*/
const initialState = { distilleries: null };

const distilleries = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DISTILLERIES: {
            return {
                ...state,
                ...action.distilleries,
            };
        }
        default:
            return state;
    }
};

export default distilleries;
