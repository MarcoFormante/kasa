'use client'

import { add, remove } from "@/app/actions/favorites";
import { FavoritesAptsContext } from "@/app/contexts/FavoritesContext";
import { useContext, useEffect } from "react";


export function FavoriteBtn({apt}){
    const {favoriteApts,setFavoriteApts} = useContext(FavoritesAptsContext)

    const isInFavorite = favoriteApts.find((apart) => apart.id === apt.id)
    
    
    const addInFavorites = async ()=>{
        const response = await add(apt.id)
        if (response.error) {
            return console.error(response.error);
        }
        
        setFavoriteApts(prev => [...prev,{...apt}])
    }

        const removeFromFavorites = async ()=>{
            const response = await remove(apt.id)
            if (response.error) {
                return console.error(response.error);
            }
            setFavoriteApts(favoriteApts.filter((apart)=> apart.id !== apt.id))
        }

    return (
        <button aria-label={!isInFavorite ? "Ajouter aux favoris" : "Supprimer de la liste des favoris"} onClick={!isInFavorite ? addInFavorites : removeFromFavorites} className={!isInFavorite ? "fav-btn" : "fav-btn fav-btn-main-red"}>
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" d="M0.5 3.24408C0.5 6.93608 5.3 9.41608 5.3 9.41608C5.3 9.41608 10.1 6.93808 10.1 3.24408C10.1 1.73008 8.872 0.502078 7.358 0.502078C6.534 0.502078 5.804 0.872078 5.3 1.44808C4.798 0.872078 4.066 0.502078 3.242 0.502078C1.728 0.500078 0.5 1.72808 0.5 3.24408Z" fill={!isInFavorite ? "#565656" : "white"}/>
                <path d="M7.35742 0.149658C9.0624 0.149658 10.4502 1.53968 10.4502 3.24438C10.4501 5.19368 9.23491 6.79293 8.02246 7.90552C6.80667 9.02115 5.56625 9.67204 5.46094 9.72681L5.45508 9.72974C5.40968 9.75092 5.35814 9.76587 5.2998 9.76587C5.24147 9.76587 5.18993 9.75092 5.14453 9.72974L5.13867 9.72681C5.03331 9.67201 3.79295 9.02046 2.57715 7.90454C1.36473 6.79173 0.149554 5.19269 0.149414 3.24438C0.149414 1.53967 1.53721 0.149658 3.24219 0.149658C4.00333 0.149755 4.73317 0.440216 5.2998 0.952393C5.86644 0.440217 6.59628 0.149755 7.35742 0.149658ZM3.24219 0.849854C1.92318 0.849854 0.849609 1.92507 0.849609 3.24438C0.849746 4.80816 1.80066 6.16563 2.8584 7.1897C3.84331 8.14323 4.90138 8.78525 5.2998 9.01294C5.69823 8.78525 6.7563 8.14323 7.74121 7.1897C8.79895 6.16563 9.74986 4.80816 9.75 3.24438C9.75 1.92523 8.67658 0.851807 7.35742 0.851807C6.76287 0.851905 6.18759 1.08264 5.74609 1.49243L5.56445 1.67896C5.44577 1.81326 5.2354 1.83036 5.09375 1.72974L5.03711 1.67896C4.57698 1.15094 3.92164 0.849966 3.24219 0.849854Z" fill="white" stroke="#F5F5F5" strokeWidth="0.3"/>
            </svg>
        </button>
    )
}