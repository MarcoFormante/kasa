"use client"

import { LinkButton } from "./components/Button/LinkButton"
/**
 * NotFound Page Component.
 * @component NotFound
 * @memberof module:Pages
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>Custom 404 Error Page</h3>
 * <p>This is a Client Component triggered automatically by Next.js when a route is not found or when the <code>notFound()</code> function is called manually.</p>
 * <p><strong>User Experience Flow:</strong></p>
 * <ul>
 * <li><b>Visual Feedback:</b> Displays a large 404 heading to immediately inform the user of the error.</li>
 * <li><b>Contextual Message:</b> Provides a clear explanation that the requested page does not exist.</li>
 * <li><b>Recovery Path:</b> Includes a primary link to redirect users back to the Homepage.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> Acts as the global safety net for any broken links or non-existent apartment IDs.</p>
 * </section>
 * @returns {JSX.Element} The rendered 404 error page with navigation recovery.
 */

 function NotFound(){
    return (
        <main className="notFound-container">
            <div>
                <h1 className="notfound-h1">404</h1>
                <p>Il semble que la page que vous cherchez ait pris des vacances… ou n’ait jamais existé.</p>
            </div>
            <div className="notFound-links-container">
                <LinkButton styles={"w-200"} label={"accueil"} href={"/"}/>
                <LinkButton styles={"w-200"} label={"Logements"} href={"/"}/>
            </div>
        </main>
    )
}


export default NotFound