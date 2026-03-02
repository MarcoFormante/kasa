import Link from "next/link";
import { Heading } from "../components/Heading/Heading";
import { LoginForm } from "./LoginForm";

export const metadata = {
  title: "Login",
};


/**
 * Login Page Component.
 * @component Login
 * @memberof module:Pages
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>User Authentication Page</h3>
 * <p>The gateway for existing users to access protected features. It provides a secure interface for entering credentials and manages post-login navigation flow.</p>
 * <p><strong>Key Features:</strong></p>
 * <ul>
 * <li><b>Credential Entry:</b> Integrates the {@link LoginForm} to handle user input and server-side authentication requests.</li>
 * <li><b>Dynamic Redirection:</b> Utilizes the redirectPath prop to ensure users are sent back to their intended destination (like Favorites or Add Property) after logging in.</li>
 * <li><b>Navigation Persistence:</b> Maintains the redirect context when providing links to the registration page, ensuring a seamless user journey.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> This component works in tandem with the AlertHandlerContext to display feedback regarding login errors or session expiration.</p>
 * </section>
 * @param {Object} props - Component props.
 * @param {string} [props.redirectPath] - The URL path to redirect the user to after a successful login.
 * @returns {JSX.Element} The rendered login page.
 */
function Login({redirectPath}){
    
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

export default Login