import { cookies } from "next/headers";
import { AjoutForm } from "./AjoutForm";
import { Button } from "../components/Button/Button";
import { LinkButton } from "../components/Button/LinkButton";
import Login from "../login/page";
import { Alert } from "../components/Alert/Alert";

export const metadata = {
  title: "Ajout d'un logement",
};

/**
 * Property Addition Page.
 * @component Ajout
 * @memberof module:Pages
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>Property Addition Page (Server Component)</h3>
 * <p>A restricted access page used for submitting new property listings to the database. It handles pre-render authentication checks to protect the form.</p>
 * <p><strong>Authentication Flow:</strong></p>
 * <ul>
 * <li><b>Token Verification:</b> Checks for a valid JWT or session token on the server side.</li>
 * <li><b>Conditional Rendering:</b> Displays the property form if authenticated; otherwise, renders the {@link Login} component.</li>
 * <li><b>Redirection Logic:</b> Includes a redirect state to return the user to this page immediately after a successful login.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> Form submission is handled via Server Actions to ensure data integrity and security.</p>
 * </section>
 *
 * @returns {JSX.Element} The rendered Ajout page or Login redirect.
 */
 async function Ajout(){
    const token = (await cookies()).get("token")?.value
    
    if (!token) {
        return (
            <div>
                <Alert color="red" text={"Connectez vous pour ajouter un logement"}/>
                <Login redirectPath={"/ajout"}/>            
            </div>
        ) 
    }

    return (
        <main className="ajout-page">
            <div>
                <div className="retour-btn-container retour-btn-container-w-93">
                    <LinkButton
                        isBackBtn={true}
                        href={"/"} 
                        label={"Retour"}
                        type="btn-light-grey"
                    />
                </div>
                <form action="">
                    <div className="flex-row-between-center mt-40">
                        <h1>Ajouter une propriété</h1>  
                        <Button label={"Ajouter"} styles={"w-96"} type={"btn-main-red"}/>
                    </div>
                    <AjoutForm/>
                </form>
            </div>
        </main>
    )
}


export default Ajout