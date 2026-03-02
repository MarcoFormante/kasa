/**
 * @module Contexts
 */
"use client"

import { createContext, useContext, useState } from "react"
import { Alert } from "../components/Alert/Alert"

export const AlertContext = createContext(null)


/**
 * Alert Handler Context Provider.
 * @name AlertHandlerContext
 * @component AlertHandlerProvider
 * @memberof module:Contexts
 * @description
 * <section style="padding: 10px; border-left: 3px solid #2196F3;">
 * <h3>Global Notification System</h3>
 * <p>A centralized context provider that manages the visibility, content, and duration of the global Alert system. It allows any descendant component to trigger notifications without prop drilling.</p>
 * <p><strong>Core Functionality:</strong></p>
 * <ul>
 * <li><b>State Management:</b> Controls the visibility toggle, message content, and severity type (success, error, info) of the active alert.</li>
 * <li><b>Top-Level Rendering:</b> Integrates the {@link Alert} component at the root level to ensure it overlays the entire application UI.</li>
 * <li><b>Auto-Dismiss Logic:</b> Handles the lifecycle of notifications, including automatic closing after a specified timeout.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> This provider should be placed high in the component tree (usually within the Root Layout) to be accessible by all application routes.</p>
 * </section>
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components that will have access to the context.
 * @returns {JSX.Element} The provider wrapper with the integrated Alert component.
 */
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