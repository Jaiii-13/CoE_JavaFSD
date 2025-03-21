import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
    cart: [],
};

// Reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };

        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

        default:
            return state;
    }
};

// Create Context
const CartContext = createContext();

// Context Provider
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook
export const useCart = () => useContext(CartContext);
