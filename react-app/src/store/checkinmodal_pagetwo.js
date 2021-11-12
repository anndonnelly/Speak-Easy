const GET_SELECTED_DRINK = "checkins/GET_SELECTED_DRINK";

const addSelectedDrinkAction = (drink) => {
  return {
    type: GET_SELECTED_DRINK,
    drink,
  };
};

export const loadSelectedDrink = (id) => async (dispatch) => {
  const res = await fetch(`/api/drinks/${id}`);
  if (res.ok) {
    const drink = await res.json();
    dispatch(addSelectedDrinkAction(drink));
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
export default function selectedDrink(state = initialState, action) {
//   const newState = { ...state };
  switch (action.type) {
    case GET_SELECTED_DRINK:
      return action.drink;
    default:
      return state;
  }
}
