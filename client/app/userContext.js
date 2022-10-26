import { createContext,useReducer } from "react";

export const UserContext = createContext()

const initial ={
    isLogin:false,
    user:{},
    setShowMLogin:false,
}

const reducer = (state,action)=>{
    const {type,payload } = action
    switch(type){
        case 'LOGIN_SUCCESS':
            return{
                isLogin:true,
                user:payload,
            }
        case 'LOGOUT':
            return{
                isLogin:false,
                user:{}
            }

        default:
            throw new Error()
    }
}

export const UserContextProvider = ({children})=>{
    const [state,dispatch] =useReducer(reducer,initial)
    return(
        <UserContext.Provider value={[state,dispatch]}>
            {children}
        </UserContext.Provider>
    )
}