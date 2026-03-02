
/**
 * @module Pages
 */
import { Suspense } from "react";
import { Heading } from "./components/Heading/Heading";
import { Hero } from "./components/Hero/Hero";
import { AptsList } from "./components/Homepage/AptsList";
import { StepsCard } from "./components/Homepage/StepsCard";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { Loading } from "./components/Loading/Loading";

export const metadata = {
  title: "Accueil",
};

/**
 * Home Page Component.
 * @component Home
 * @memberof module:Pages
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>Home Page (Server Component)</h3>
 * <p>The main entry point of the Kasa application. This component is rendered on the server to ensure optimal performance and SEO.</p>
 * <p><strong>Page Structure:</strong></p>
 * <ul>
 * <li><b>SEO Layer:</b> Injects Structured Data (JSON-LD) for Accommodation and ItemList schemas.</li>
 * <li><b>Hero Section:</b> Displays the main brand heading and atmospheric background.</li>
 * <li><b>Apartment Feed:</b> An async list of properties fetched directly on the server.</li>
 * <li><b>Instructional Section:</b> Cards explaining the booking process.</li>
 * </ul>
 * <p><strong>Technical Note:</strong> The apartment list is wrapped in a Suspense boundary to provide a smooth loading state while the server fetches data.</p>
 * </section>
 * @returns {Promise<JSX.Element>} The rendered Home page structure.
 */
  function Home() {

  const jsonSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Liste d'hébergements Kasa",
      "description": "Découvrez nos appartements partout en France",
  };

  return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema) }}
        />
        <section className="page-section">
           <Heading 
              text={"Chez vous, partout et ailleurs"} 
              styles={"mt-40"}
            />

          <Paragraph 
            text={"Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes."}
            styles={"mt-8 text-center"}
          />
          
          <Hero isHomePage={true}/>
        </section>

        <section className="apts-list page-section" aria-label="Liste d'appartements disponibles">
          <Suspense fallback={<Loading/>}>
            <AptsList/>
          </Suspense>
        </section>

        <section className="page-section steps-section section-white">
            <h2 className="text-center semibold black">Comment ça marche ?</h2>
            <Paragraph
            styles={"mt-16 text-center w-65x steps-paragraph"}
            text={`Que vous partiez pour un week-end improvisé, des vacances en famille ou un voyage professionnel, Kasa vous aide à trouver un lieu qui vous ressemble.`}
            />

          <div className="steps-list-container">
              <StepsCard 
                title={"Recherchez"}
                desc={"Entrez votre destination, vos dates et laissez Kasa faire le reste"}
              />
              <StepsCard 
                title={"Réservez"}
                desc={"Profitez d’une plateforme sécurisée et de profils d’hôtes vérifiés."}
              />
              <StepsCard 
                title={"Vivez l’expérience"}
                desc={"Installez-vous, profitez de votre séjour, et sentez-vous chez vous, partout."}
              />
          </div>
        </section>
        
      </main>
  );
}

export default Home