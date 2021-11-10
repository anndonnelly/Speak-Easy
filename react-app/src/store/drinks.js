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

export const add = (drink) => async (dispatch) => {
    const res = await fetch("/api/drinks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(drink),
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

export const update = (drinkId, payload) => async (dispatch) => {
    const res = await fetch(`/api/drinks/${drinkId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (res.ok) {
        const drink = await res.json();
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

export const remove = (drinkId) => async (dispatch) => {
    const res = await fetch(`/api/drinks/${drinkId}`, {
        method: "DELETE",
    });
    if (res.ok) {
        const drinkId = await res.json();
        dispatch(removeDrink(drinkId));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

/*-------------REDUCER-------------*/
const initalState = {};
const drinks = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_DRINKS: {
            return {
                ...state,
                ...action.drinks,
            };
        }
        case ADD_DRINK:
        case UPDATE_DRINK: {
            return {
                ...state,
                [action.drink.id]: action.drink,
            };
        }
        case REMOVE_DRINK: {
            const newState = { ...state };
            delete newState[action.drink];
            return newState;
        }
        default:
            return state;
    }
};

export default drinks;
