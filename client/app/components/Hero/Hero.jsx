import Image from "next/image";
import heroHome from "@/app/assets/images/hero-home.webp"
import heroAbout from "@/app/assets/images/hero-about.webp"

export function Hero({isHomePage}){
    return (
        <Image 
        loading="lazy" 
        src={isHomePage ? heroHome : heroAbout} 
        alt="Maison avec jardin - Kasa"
        width={1115} 
        height={458}
        className="hero"
        />
    )
}