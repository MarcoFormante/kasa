import Link from "next/link";
import { Heading } from "../components/Heading/Heading";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { RegisterForm } from "./RegisterForm";

export default function Inscription(){


    return (
        <main className="auth-page auth-page-inscription">
            <div className="auth-page-container">
                <Heading 
                    text={"Rejoignez la communauté Kasa"} 
                />
                <Paragraph text={`Créez votre compte et commencez à voyager autrement : réservez des logements uniques, découvrez de nouvelles destinations et partagez vos propres lieux avec d’autres voyageurs.`}/>

                <RegisterForm/>
                       
                <div className="actions-container actions-container-inscription">
                    <Link href={"/login"}>Déjà membre ? Se connecter</Link>
                </div>
                
            </div>
        </main>
    )
}