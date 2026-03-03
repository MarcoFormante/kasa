import { Inter } from "next/font/google";
import "./assets/styles/index.css"
import { Header } from "./components/Header/Header";
import { FavoritesContext } from "./contexts/FavoritesContext";
import { AlertHandlerContext } from "./contexts/AlertContext";
import { Footer } from "./components/Footer/Footer";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable:"--inter"
})

export const metadata = {
  title: {
    default: "Kasa - Location d'appartements",
    template: "%s | Kasa",
  },
  description: "Trouvez l'hébergement idéal avec Kasa. Des milliers d'appartements sélectionnés pour vous.",
};


/**
 * Root Layout Component.
 * @component RootLayout
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>Main Application Layout</h3>
 * <p>The core structural component that wraps every page in the application. It defines the HTML skeleton and provides global services to all routes.</p>
 * <p><strong>Responsibilities:</strong></p>
 * <ul>
 * <li><b>Typography:</b> Injects the Inter font into the HTML body.</li>
 * <li><b>Context Providers:</b> Initializes {@link FavoritesContext} and {@link AlertHandlerContext} for global state management.</li>
 * <li><b>Navigation:</b> Renders the common {@link Header} component across all routes.</li>
 * </ul>
 * </section>
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The dynamic content of the current route.
 * @returns {JSX.Element} The main DOM tree of the application.
 */
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <FavoritesContext>
        <AlertHandlerContext>
          <Header/>
            {children}
          <Footer/>
        </AlertHandlerContext>
      </FavoritesContext>
      </body>
    </html>
  );
}


export default  RootLayout