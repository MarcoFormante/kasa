import { cookies } from "next/headers";
import { Heading } from "../components/Heading/Heading";
import Login from "../login/page";
import { FavoritesList } from "./FavoritesList";
import { Alert } from "../components/Alert/Alert";

export default async function Favoris(){
    const token = (await cookies()).get("token")?.value
    const user = (await cookies())?.get("user")?.value

    if (!token || !user) {
        return (
            <div>
                <Alert color="red" text={"Connectez vous pour acceder aux favoris"}/>
                <Login redirectPath={"/favoris"}/>            
            </div>
        ) 
    }
    
    const userId = user ? JSON.parse(user)?.id : "-1"

    const response = await fetch(`http://localhost:8000/api/users/${userId}/favorites`,{
        headers:{
            "authorization":"Bearer " + token 
        }
    })

    const favoritesApts = await response.json()

    if (favoritesApts?.error == "authentication required") {
        return (
            <div>
                <Alert color="red" text={"Connectez vous pour ajouter un logement"}/>
                <Login redirectPath={"/favoris"}/>            
            </div>
        )
    }
    

    return (
        <main className="favoris-page">
            <section className="favoris-page-heading-section">
                <Heading 
                    text={"Vos favoris"} 
                />
    
                <p className="mt-8 text-center">Retrouvez ici tous les logements que vous avez aimés. 
                    <span> Prêts à réserver ? Un simple clic et votre prochain séjour est en route.</span>
                </p>
            </section>

            <section className="apts-list page-section" aria-label="Liste favoris">
                <FavoritesList/>
            </section>
            
        </main>
    )
}