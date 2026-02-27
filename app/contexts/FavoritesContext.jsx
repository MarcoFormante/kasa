'use client'
import { createContext, useEffect, useState } from "react";
import { getFavorites } from "../actions/favorites";


export const FavoritesAptsContext = createContext([])

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

