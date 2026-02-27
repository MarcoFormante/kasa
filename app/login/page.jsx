import Link from "next/link";
import { Heading } from "../components/Heading/Heading";
import { LoginForm } from "./LoginForm";

export const metadata = {
  title: "Login",
};

export default function Login({redirectPath}){
    
    return (
        <main className="auth-page">
            <div className="auth-page-container">
                <Heading 
                    text={"Heureux de vous revoir"} 
                />
                <p className="text-center">Connectez-vous pour retrouver vos réservations, vos  
                    <span> annonces et tout ce qui rend vos séjours uniques.</span>
                </p>

               <LoginForm redirectPath={redirectPath}/>

                <div className="actions-container">
                    <span role="button">Mot de passe oublié</span>
                    <Link href={`/inscription${redirectPath ? "?redirectPath=" + redirectPath : ""}   `}>Pas encore de compte ? Inscrivez-vous</Link>
                </div>
                
            </div>
        </main>
    )
}