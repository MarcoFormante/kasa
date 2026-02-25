import { Apartment } from "./components/Apartment/Apartment";
import { Heading } from "./components/Heading/Heading";
import { Hero } from "./components/Hero/Hero";
import { StepsCard } from "./components/Homepage/StepsCard";
import { Paragraph } from "./components/Paragraph/Paragraph";

export default async function Home() {

  const response = await fetch("http://localhost:3000/api/properties");
  const apts = await response.json()
  
  
  return (
      <main>
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
        
        {apts && apts.length > 0 && 
        
        apts.map((apt) => (
           <Apartment 
           key={apt.id} 
           id={apt.id}
           cover={apt.cover}
           title={apt.title}
           price={apt.price_per_night}
           slug={apt.slug}
           location={apt.location}
           />
        ))
        
        }
         
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
