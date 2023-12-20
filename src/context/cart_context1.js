import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext=createContext();
const initialstate={
    cart:[],
}
const CartContextProvider=({children})=>{
    const{state, dispatch}=useReducer(reducer, initialstate);
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
      };
    return <CartContextProvider.Provider value={{...state, addToCart}}>{children}</CartContextProvider.Provider>
}
const useCartContext=()=>{
    return useContext(CartContext);
}
export {useCartContext, CartContextProvider}