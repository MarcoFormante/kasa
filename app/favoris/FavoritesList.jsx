'use client'

import { useContext } from "react"
import { FavoritesAptsContext } from "../contexts/FavoritesContext"
import { Apartment } from "../components/Apartment/Apartment"

export function FavoritesList(){
    const {favoriteApts} = useContext(FavoritesAptsContext)
    return (
        <>
            {favoriteApts && favoriteApts.length > 0 && 

                favoriteApts.map((apt) => (
                <Apartment
                    key={apt.id} 
                    id={apt.id}
                    cover={apt.cover}
                    title={apt.title}
                    price={apt.price_per_night}
                    slug={apt.slug}
                    location={apt.location}
                />
            ))
        }
        </>
    )
}