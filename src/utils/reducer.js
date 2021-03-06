const initialState = {
    basket: [],
    user: ""
};

// Selector
const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state, action) => {
    // console.log(action.user);
    // console.log(state)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            // copying from the basket state
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }
            return {
                ...state,
                basket: newBasket,
            };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;

    }
};

export { initialState, reducer, getBasketTotal };