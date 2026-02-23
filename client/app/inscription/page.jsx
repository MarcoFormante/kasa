import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Paragraph } from "../components/Paragraph/Paragraph";

export default function Inscription(){
    return (
        <main className="auth-page auth-page-inscription">
            <div className="auth-page-container">
                <Heading 
                    text={"Rejoignez la communauté Kasa"} 
                />
                <Paragraph text={`Créez votre compte et commencez à voyager autrement : réservez des logements uniques, découvrez de nouvelles destinations et partagez vos propres lieux avec d’autres voyageurs.`}/>

                <form className="auth-form">
                    <div className="input-container">
                        <label htmlFor="name">Nom</label>
                        <input required type="name" name="name" id="name" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="surname">Prénom</label>
                        <input required type="surname" name="surname" id="surname" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Adresse email</label>
                        <input required type="email" name="email" id="email" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Mot de passe</label>
                        <input required type="password" name="password" id="password" />
                    </div>
                    <div className="auth-page-conditions-checkbox-container">
                        <input type="checkbox" name="acceptConditions" id="acceptConditions" />
                        <label htmlFor="acceptConditions">J’accepte les <span role="button" className="underline">conditions générales d’utilisation</span></label>
                    </div>
                    <div className="btn-container-inscription">
                        <Button styles="w-230 m-auto" type={"btn-main-red"} label={"Se connecter"}/>
                    </div>
                </form>
                <div className="actions-container actions-container-inscription">
                    <Link href={"/login"}>Déjà membre ? Se connecter</Link>
                </div>
                
            </div>
        </main>
    )
}