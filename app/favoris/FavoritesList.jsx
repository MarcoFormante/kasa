'use client'

import { useContext } from "react"
import { FavoritesAptsContext } from "../contexts/FavoritesContext"
import { Apartment } from "../components/Apartment/Apartment"
import Link from "next/link"

export function FavoritesList(){
    const {favoriteApts} = useContext(FavoritesAptsContext)

    return (
        <>
            {favoriteApts && favoriteApts.length > 0 ? 
                favoriteApts.map((apt) => (
                <Apartment
                    key={apt.id} 
                    id={apt.id}
                    cover={apt.cover}
                    title={apt.title}
                    price={apt.price}
                    slug={apt.slug}
                    location={apt.location}
                />
            ))
            :
            <div className="text-center w-full mt-40 section-white p-20">
                <p className="block ">{"Vous n'avez pas de logements dans la liste de favoris"} </p>
                <p className="block "> Retournez à  <Link href={"/"} className="underline inline"><strong>{"l'accueil"}</strong></Link> pour en ajouter
                </p>
            </div>
        }
        </>
    )
}