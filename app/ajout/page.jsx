import { cookies } from "next/headers";
import { AjoutForm } from "../components/AjoutForm/AjoutForm";
import { Button } from "../components/Button/Button";
import { LinkButton } from "../components/Button/LinkButton";
import Login from "../login/page";
import { Alert } from "../components/Alert/Alert";

export default async function Ajout(){
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