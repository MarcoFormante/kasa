import { Apartment } from "../components/Apartment/Apartment";
import { Heading } from "../components/Heading/Heading";
import { Paragraph } from "../components/Paragraph/Paragraph";

export default function Favoris(){
    return (
        <main className="favoris-page">
            <section className="favoris-page-heading-section">
                <Heading 
                    text={"Vos favoris"} 
                />
    
                <p className="mt-8 text-center">Retrouvez ici tous les logements que vous avez aimés. 
                    <span> Prêts à réserver ? Un simple clic et votre prochain séjour est en route.</span>
                </p>
            </section>

            <section>
                <section className="apts-list page-section" aria-label="Liste favoris">
                    <Apartment isFavorisPage/>
                    <Apartment isFavorisPage/>
                    <Apartment isFavorisPage/>
                    <Apartment isFavorisPage/>
                    <Apartment isFavorisPage/>
                    
                </section>
                
            </section>
        </main>
    )
}