import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";

export default function Login(){
    return (
        <main className="login-page">
            <div className="login-page-container">
                <Heading 
                    text={"Heureux de vous revoir"} 
                />
                <p className="text-center">Connectez-vous pour retrouver vos réservations, vos  
                    <span> annonces et tout ce qui rend vos séjours uniques.</span>
                </p>

                <form>
                    <div className="input-container">
                        <label htmlFor="email">Adresse email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-container input-container-last">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <Button styles="w-230 m-auto" type={"btn-main-red"} label={"Se connecter"}/>
                </form>
                <div className="actions-container">
                    <span role="button">Mot de passe oublié</span>
                    <Link href={"/inscription"}>Pas encore de compte ? Inscrivez-vous</Link>
                </div>
                
            </div>
        </main>
    )
}