import Image from "next/image";
import hero from "@/app/assets/images/hero.webp"

export function Hero(){
    return (
        <Image 
        loading="lazy" 
        src={hero} 
        alt="Maison avec jardin - Kasa"
        width={1115} 
        height={458}
        className="hero"
        />
    )
}