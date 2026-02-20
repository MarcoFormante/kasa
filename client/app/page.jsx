import { Apartment } from "./components/Apartment/Apartment";
import { Heading } from "./components/Heading/Heading";
import { Hero } from "./components/Hero/Hero";
import { Paragraph } from "./components/Paragraph/Paragraph";

export default function Home() {
  return (
      <main>
        <section className="page-section">
           <Heading 
              text={"Chez vous, partout et ailleurs"} 
              styles={"home-heading"}
            />

          <Paragraph 
            text={"Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes."}
            styles={"mt-8 text-center"}
          />
          <Hero/>
        </section>

        <section className="apts-list page-section" aria-label="Liste d'appartements disponibles">

          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
        </section>
        
      </main>
  );
}
