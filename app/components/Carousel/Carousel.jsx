
'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowButton } from "./ArrowButton";

export function Carousel({images,closeCarousel}){

    const slides = [images[images.length - 1], ...images, images[0]];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef(null);


    const nextSlide = () => {
        if (currentIndex >= slides.length - 1) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (currentIndex <= 0) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };


    useEffect(() => {
        if (currentIndex === slides.length - 1) {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 500); 
        }

        if (currentIndex === 0) {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(slides.length - 2);
            }, 500);
        }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, slides.length]);

  

  useEffect(()=>{
    window.addEventListener("keydown",(e)=>{
        if (e.key === "Escape" ) {
            closeCarousel()
        }
    })

    return ()=> window.removeEventListener("keydown",(e)=>{
        if (e.key === "Escape" ) {
            closeCarousel()
        }
    })
  },[closeCarousel])

    return (
        <div className="carousel-container" >
            <button aria-label="Fermer le carousel" className="carousel-exit pointer" onClick={closeCarousel}>X</button>
            <div className="carousel-center-container">
                <div 
                    className={`carousel-images ${isTransitioning ? "carousel-images-transitioning" : ""}`}
                    style={{transform: `translateX(-${currentIndex * 100}%)`,}}
                >
                   { slides?.map((img,index)=>{
                        return (
                            <Image
                                key={"carousel-" + img + index}
                                src={img}
                                alt={"Slide-" + index}
                                width={1400}
                                height={800}
                            />
                        )
                        })
                    } 
                </div>
               
            </div>
                <ArrowButton aria={"Slide precedente"} onClick={prevSlide} style={"carousel-arrow-left"}/>
                <ArrowButton aria={"Slide suivante"} onClick={nextSlide} style={"carousel-arrow-right"}/>
        </div>
    )
}