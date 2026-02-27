"use client"

import { createContext, useContext, useState } from "react"
import { Alert } from "../components/Alert/Alert"

export const AlertContext = createContext(null)

export function AlertHandlerContext({children}){
    const [alert,setAlert] = useState(null)

    return (
        <AlertContext.Provider value={{alert,setAlert}}>
           <Alert onClose={()=>setAlert(null)} color={alert?.color} text={alert?.text} isLoginError={alert?.isLoginError}/> 
            {children}
        </AlertContext.Provider>
    )
}


export const useAlert = ()=> useContext(AlertContext)