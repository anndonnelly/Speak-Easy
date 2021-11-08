import produce from "immer";

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

const removeDrink = (drink) => {
    return {
        type: REMOVE_DRINK,
        drink,
    };
};

/*-------------THUNK CREATORS-------------*/

export const load = () => async (dispatch) => {
    const res = await fetch("/api/drink", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.ok) {
        const drinks = res.json();
        dispatch(loadDrinks(drinks));
        return drinks;
    } else if (res.status < 500) {
        const data = res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

export const add = (drink) => async (dispatch) => {
    const res = fetch("/api/drink", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(drink),
    });
    if (res.ok) {
        const drink = res.json();
        dispatch(addDrink(drink));
        return drink;
    } else if (res.status < 500) {
        const data = res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

export const update = (drinkId, payload) => async (dispatch) => {
    const res = fetch(`/api/drink/${drinkId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (res.ok) {
        const drink = res.json();
        dispatch(updateDrink(drink));
        return drink;
    } else if (res.status < 500) {
        const data = res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

export const remove = (drinkId) => async (dispatch) => {
    const res = fetch(`/api/drink/${drinkId}`, {
        method: "DELETE",
    });
    if (res.ok) {
        const drink = res.json();
        dispatch(removeDrink(drink));
    } else if (res.status < 500) {
        const data = res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return "Sorry, but an Error occured. Please try again.";
    }
};

/*-------------REDUCER-------------*/
const drinkReducer = produce((draft, action) => {
    switch (action.type) {
        case LOAD_DRINKS: {
            draft.drinks.forEach((drink) => {
                draft[drink.id] = action.drink;
            });
            break;
        }
        case ADD_DRINK:
            draft.push(action.drink);
            break;
        case UPDATE_DRINK: {
            const index = draft.findIndex(
                (drink) => drink.id === action.drink.id
            );
            if (index !== -1) draft[index] = action.drink;
            break;
        }
        case REMOVE_DRINK: {
            const index = draft.findIndex(
                (drink) => drink.id === action.drink.id
            );
            if (index !== -1) draft.splice(index, 1);
            break;
        }
        default:
            break;
    }
});
export default drinkReducer;
