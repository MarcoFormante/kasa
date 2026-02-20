import Image from "next/image";
import { Heading } from "../components/Heading/Heading";
import { Hero } from "../components/Hero/Hero";
import { Paragraph } from "../components/Paragraph/Paragraph";
import aboutMissionImage from "@/app/assets/images/about-mission.webp"

export default function About(){
    return(
            <main>
                <section className="page-section">
                    <Heading 
                        text={"À propos"} 
                        styles={"mt-40"}
                    />
        
                    <Paragraph 
                        text={"Chez Kasa, nous croyons que chaque voyage mérite un lieu unique où se sentir bien."}
                        styles={"mt-8 text-center"}
                    />

                    <Paragraph 
                        text={"Depuis notre création, nous mettons en relation des voyageurs en quête d’authenticité avec des hôtes passionnés qui aiment partager leur région et leurs bonnes adresses."}
                        styles={"mt-30 text-center sec-paragraph"}
                    />

                  <Hero isHomePage={false}/>
                </section>

                <section className="about-mission-section">
                    <div className="about-mission-flex-container">
                        <div>
                            <h2>Notre mission est simple :</h2>
                            <ol>
                                <li>Offrir une plateforme fiable et simple d’utilisation</li>
                                <li>Proposer des hébergements variés et de qualité</li>
                                <li>Favoriser des échanges humains et chaleureux entre hôtes et voyageurs</li>
                            </ol>
                            <p className="">Que vous cherchiez un appartement cosy en centre-ville, une maison en bord de mer ou un chalet à la montagne, Kasa vous accompagne pour que chaque séjour devienne un souvenir inoubliable.</p>
                        </div>
                        
                        <div className="about-mission-img-container">
                            <Image 
                                src={aboutMissionImage}
                                alt="Maison très elegante avec jardin - Kasa"
                                className="about-mission-img"
                            />
                        </div>
                    </div>
                </section>
                
            </main>
        
    )
}