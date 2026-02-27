
'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

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
              <button aria-label="Slide precedente" onClick={prevSlide} className="carousel-arrow carousel-arrow-left">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>
                </button>
                <button aria-label="Slide suivante"  onClick={nextSlide} className="carousel-arrow carousel-arrow-right">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>
                </button>
        </div>
    )
}