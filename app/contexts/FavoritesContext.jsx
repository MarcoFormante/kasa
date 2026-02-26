'use client'
import { createContext, useEffect, useState } from "react";
import { getFavorites } from "../actions/favorites";

export const FavoritesAptsContext = createContext(JSON.parse(localStorage.getItem("favorites")) ?? [])

export function FavoritesContext({children}){
    const [favoriteApts,setFavoriteApts] = useState([])

    useEffect(()=>{
        const getFavoriteApts = async ()=>{
            const res = await getFavorites()
            setFavoriteApts(res.favorites)
            localStorage.setItem("favorites",JSON.stringify(res.favorites))
        }

        getFavoriteApts()
    },[])

    return (
        <FavoritesAptsContext.Provider value={{favoriteApts,setFavoriteApts}}>
            {children}
        </FavoritesAptsContext.Provider>
    )
}

