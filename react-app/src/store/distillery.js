/*-------------ACTION.TYPES-------------*/
const LOAD_ONE_DISTILLERY = "distillery/LOAD_ONE_DISTILLERY";
/*-------------ACTIONS-------------*/
const loadOne = (distillery) => ({
    type: LOAD_ONE_DISTILLERY,
    distillery,
});
/*-------------THUNK CREATORS-------------*/
export const loadOneDistillery = (id) => async (dispatch) => {
    const res = await fetch(`/api/distilleries/${id}`);
    if (res.ok) {
        const distillery = await res.json();
        dispatch(loadOne(distillery));
    }
};
/*-------------REDUCER-------------*/
const initialState = {};
const distillery = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ONE_DISTILLERY: {
            return {
                ...state,
                ...action.distillery,
            };
        }
        default:
            return state;
    }
};
export default distillery;
