const GET_SELECTED_DISTILLERY = "checkins/GET_SELECTED_DISTILLERY";

const addSelectedDistilleryAction = (distillery) => {
  return {
    type: GET_SELECTED_DISTILLERY,
    distillery,
  };
};

export const loadSelectedDistillery = (id) => async (dispatch) => {
  const res = await fetch(`/api/distilleries/${id}`);
  if (res.ok) {
    const distillery = await res.json();
    dispatch(addSelectedDistilleryAction(distillery));
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};


const initialState = {};
export default function selectedDistillery(state = initialState, action) {
  switch (action.type) {
    case GET_SELECTED_DISTILLERY:
      return action.distillery;
    default:
      return state;
  }
}
