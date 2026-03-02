import Link from "next/link";
import { Heading } from "../components/Heading/Heading";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { RegisterForm } from "./RegisterForm";


export const metadata = {
  title: "Inscription",
};


/**
 * Registration Page Component.
 * @component Inscription
 * @memberof module:Pages
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>User Registration Page</h3>
 * <p>The entry point for new users to create an account on the Kasa platform. This page focuses on a smooth onboarding experience through a simplified interface.</p>
 * <p><strong>Component Structure:</strong></p>
 * <ul>
 * <li><b>Introductory Content:</b> Displays a welcoming header and a brief description of the platform's benefits.</li>
 * <li><b>Input Management:</b> Integrates the {@link RegisterForm} component to handle user data collection and validation.</li>
 * <li><b>Account Redirection:</b> Provides a direct navigation link to the {@link Login} page for existing users.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> This page is designed to be lightweight, delegating complex form logic and validation to specialized client-side child components.</p>
 * </section>
 *
 * @returns {JSX.Element} The rendered registration page.
 */
function Inscription(){

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


export default Inscription