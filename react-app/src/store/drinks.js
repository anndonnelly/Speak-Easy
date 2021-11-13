/*-------------Types-------------*/
const LOAD_DRINKS = "drink/LOAD_DRINKS";
const ADD_DRINK = "drink/ADD_DRINK";
const UPDATE_DRINK = "drink/UPDATE_DRINK";
const REMOVE_DRINK = "drink/REMOVE_DRINK";

/*-------------ACTIONS-------------*/

const loadDrinks = (drinks) => {
    return {
        type: LOAD_DRINKS,
        drinks,
    };
};

const addDrink = (drink) => {
    return {
        type: ADD_DRINK,
        drink,
    };
};

const updateDrink = (drink) => {
    return {
        type: UPDATE_DRINK,
        drink,
    };
};

const removeDrink = (drinkId) => {
    return {
        type: REMOVE_DRINK,
        drinkId,
    };
};

/*-------------THUNK CREATORS-------------*/
export const loadAllDrinks = () => async (dispatch) => {
    const res = await fetch("/api/drinks");
    if (res.ok) {
        const drinks = await res.json();
        dispatch(loadDrinks(drinks));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

export const addADrinkThunk = (drink) => async (dispatch) => {

    const formData = new FormData();
    formData.append("name", drink.name);
    formData.append("description", drink.description);
    formData.append("image", drink.image);
    formData.append("abv", drink.abv);
    formData.append("distillery_id", drink.distillery_id);
    const res = await fetch("/api/drinks", {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        const drink = await res.json();
        dispatch(addDrink(drink));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

export const updateDrinkThunk = (drinkId, payload) => async (dispatch) => {
    const res = await fetch(`/api/drinks/${drinkId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (res.ok) {
        const drink = await res.json();
        console.log(drink);
        dispatch(updateDrink(drink));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

export const removeDrinkThunk = (drinkId) => async (dispatch) => {
  const res = await fetch(`/api/drinks/${drinkId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(removeDrink(drinkId));
  }
};

/*-------------REDUCER-------------*/
const initalState = {};
const drinks = (state = initalState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOAD_DRINKS:
            return action.drinks
        case ADD_DRINK:
                newState[action.drink.id] = action.drink
                return newState;
        case UPDATE_DRINK:
            return {
                ...state,
                [action.drink.id]: action.drink,
            };
        case REMOVE_DRINK:
            delete newState[action.drinkId];
            return newState;
        default:
            return state;
    }
};

export default drinks;
