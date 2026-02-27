'use client'
import { createContext, useEffect, useState } from "react";
import { getFavorites } from "../actions/favorites";

const localFavorites = localStorage.getItem("favorites")

export const FavoritesAptsContext = createContext(localFavorites ? JSON.parse(localFavorites) : [])

export function FavoritesContext({children}){
    const [favoriteApts,setFavoriteApts] = useState([])

    useEffect(()=>{
        const getFavoriteApts = async ()=>{
            const res = await getFavorites()
            if (res) {
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

