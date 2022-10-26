import { createContext,useReducer } from "react";

export const CartContext = createContext()

const initial = {
    cart:null
}

const reducer =(state,action)=>{
    const{type,dataCart}=action
    switch(type){
        case "ADD":
            return{
                cart:dataCart
            }
        case "MINUS":
            return{
                cart:dataCart
            }
        default:
            throw new Error()
    }

}

export const CartContextProvider =({children})=>{
    const[carts,setCarts] =useReducer(reducer,initial)
    return(
        <CartContext.Provider value={[carts,setCarts]}>
            {children}
        </CartContext.Provider>
    )
}