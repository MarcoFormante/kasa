import { Inter } from "next/font/google";
import "./assets/styles/index.css"
import { Header } from "./components/Header/Header";
import { FavoritesContext } from "./contexts/FavoritesContext";
import { AlertHandlerContext } from "./contexts/AlertContext";


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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <FavoritesContext>
        <AlertHandlerContext>
          <Header/>
            {children}
        </AlertHandlerContext>
      </FavoritesContext>
      </body>
    </html>
  );
}
