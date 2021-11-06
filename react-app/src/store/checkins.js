//CONSTANTS
const GET_CHECKINS= "checkins/LOAD";
const ADD_CHECKIN = "checkins/ADD";
const EDIT_CHECKIN = "checkins/EDIT";
const DELETE_CHECKIN = "checkins/DELETE";

//ACTION CREATORS
const getCheckinsAction = (checkin) => {
  return {
    type: GET_CHECKINS,
    payload: checkin,
  };
};

const addCheckinAction = (checkin) => {
  return {
    type: ADD_CHECKIN,
    payload: checkin,
  };
};

const editCheckinAction = (checkin) => {
  return {
    type: EDIT_CHECKIN,
    payload: checkin,
  };
};

const deleteCheckinAction = (checkin) => {
  return {
    type: DELETE_CHECKIN,
    payload: checkin,
  };
};

//THUNKS
export const getCheckinsThunk = () => async (dispatch) => {
    
  const response = await fetch("/checkins");
  let checkins_obj = await response.json();
  
  if (response.ok) {
    dispatch(getCheckinsAction(checkins_obj));
  } else {
    return {ok:false}
  }
};

export const createCheckinsThunk = (checkin) => async (dispatch) => {
  const res = await fetch("/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(checkin),
  });

  if (res.ok) {
    let newCheckin = await res.json();
    dispatch(addCheckinAction(newCheckin));
    // getting all actions and turning it into a payload
  } else {
    //handle errors
  }
};

export const editCheckinsThunk = (checkin) => async (dispatch) => {
  const res = await fetch("/new", {
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
  const response = await fetch(`/delete/${id}`);
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
      return action.payload;
    case ADD_CHECKIN:
      newState[action.payload.id] = action.payload;
      return newState;
    case EDIT_CHECKIN:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_CHECKIN:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
