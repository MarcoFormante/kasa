'use client'
import { createContext, useEffect, useState } from "react";
import { getFavorites } from "../actions/favorites";


export const FavoritesAptsContext = createContext([])


/**
 * Favorites Context Provider.
 * @name FavoritesContext
 * @component FavoritesProvider
 * @memberof module:Contexts
 * @description
 * <section style="padding: 10px; border-left: 3px solid #2196F3;">
 * <h3>Favorites State & Persistence Manager</h3>
 * <p>A centralized context provider responsible for the lifecycle of the user's favorite property listings. it ensures that the favorites data is consistent across the UI and persistent between sessions.</p>
 * <p><strong>Core Operations:</strong></p>
 * <ul>
 * <li><b>State Initialization:</b> On component mount, it retrieves the initial favorites list from the server using the {@link getFavorites} utility.</li>
 * <li><b>LocalStorage Persistence:</b> Automatically synchronizes the active state with the browser's local storage to ensure quick access and offline availability.</li>
 * <li><b>Data Synchronization:</b> Provides an optimized interface for child components to toggle favorites without manual prop-drilling or redundant API calls.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> This provider utilizes a useEffect hook to monitor state changes and trigger side effects for data persistence.</p>
 * </section>
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components that will consume the favorites data.
 * @returns {JSX.Element} The provider wrapper for the favorites context.
 */
export function FavoritesContext({children}){
    const [favoriteApts,setFavoriteApts] = useState([])

    useEffect(()=>{
        const getFavoriteApts = async ()=>{
            const res = await getFavorites()
            if (res && !res.favorites?.error) {
                setFavoriteApts(res.favorites)
            }
        }
        getFavoriteApts()
    },[])



    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favoriteApts))
    },[favoriteApts])

    return (
        <FavoritesAptsContext.Provider value={{favoriteApts,setFavoriteApts}}>
            {children}
        </FavoritesAptsContext.Provider>
    )
}

