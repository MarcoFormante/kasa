import { cookies } from "next/headers";
import { Heading } from "../components/Heading/Heading";
import Login from "../login/page";
import { FavoritesList } from "./FavoritesList";
import { Alert } from "../components/Alert/Alert";

export const metadata = {
  title: "Favoris",
};

/**
 * Favorites Page Component.
 * @component Favoris
 * @memberof module:Pages
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>User Favorites Page (Server Component)</h3>
 * <p>A protected route that displays a curated list of properties the user has marked as favorites. It uses server-side logic to ensure data privacy and session security.</p>
 * <p><strong>Data and Security Flow:</strong></p>
 * <ul>
 * <li><b>Session Check:</b> Inspects cookies to verify if a valid user session exists before rendering.</li>
 * <li><b>Unauthenticated Handling:</b> Redirects unauthorized users to the {@link Login} page with a contextual alert message.</li>
 * <li><b>Data Fetching:</b> Retrieves the list of favorite property IDs from the API and fetches the corresponding property details.</li>
 * <li><b>UI Rendering:</b> Passes the data to the {@link FavoritesList} component for display.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> This component is asynchronous to allow for direct server-side data fetching without a client-side loading state.</p>
 * </section>
 * @async
 * @returns {JSX.Element} The rendered Favorites page or Login redirect view.
 */
 async function Favoris(){
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
                <Heading text={"Vos favoris"} />
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


export default Favoris