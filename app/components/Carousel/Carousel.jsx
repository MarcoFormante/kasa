
'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowButton } from "./ArrowButton";


/** An infinite-loop Image Carousel component.
 * @function
 * @name Carousel
 * @memberof module:Components
 * @description
 * An infinite-loop Image Carousel component.
 * * Key features:
 * - **Infinite Loop**: Clones the first and last slides to allow continuous scrolling without a visual "jump".
 * - **Keyboard Support**: Automatically listens for the "Escape" key to trigger the close callback.
 * - **Responsive Transition**: Uses CSS transforms and a state-controlled transition class for smooth movement.
 * - **Conditional UI**: Only renders navigation arrows if there is more than one image.
 * * 
 * @param {Object} props - Component props.
 * @param {string[]} props.images - An array of image URLs to display.
 * @returns {JSX.Element} The rendered carousel component.
 */
export function Carousel({images,showCarousel,setShowCarousel}){
    const slides = images.length > 1 ? [images[images.length - 1], ...images, images[0]] : images;
    const [currentIndex, setCurrentIndex] = useState(images.length > 1 ? 1 : 0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef(null);
    const closeBtnRef = useRef(null)


    const nextSlide = useCallback(() => {
        if (currentIndex >= slides.length - 1) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }, [currentIndex, slides.length]); 


    const prevSlide = useCallback(() => {
        if (currentIndex <= 0) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    }, [currentIndex])



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




 useEffect(() => {
    if (!showCarousel) return;
   const handleKeyDown = (e) => {
        switch (e.key) {
            case "Escape":
                setShowCarousel(false);
                break;
            case "ArrowRight": 
                nextSlide();
                break;
            case "ArrowLeft": 
                prevSlide();
                break;
            default:
                break;
        }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
}, [showCarousel,nextSlide, prevSlide, setShowCarousel]);


  useEffect(()=>{
    if (showCarousel) {
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'visible'
    }

    return () => {
        document.body.style.overflow = 'visible';
    };
  },[showCarousel])



  useEffect(() => {
    if (showCarousel && closeBtnRef.current) {
        closeBtnRef.current.focus();
    }
}, [showCarousel]);
  

    return (
        <div 
            className={`carousel-container ${showCarousel && "carousel-container-open"}`}
            id="carousel-container" 
            role="dialog"
            aria-modal="true"
            aria-hidden={!showCarousel}
            >

            <button  
                tabIndex={showCarousel ? "0" : "-1" }
                aria-label="Fermer le carousel" 
                className="carousel-exit pointer" 
                onClick={()=>setShowCarousel(false)}
                ref={closeBtnRef}
            >
                X
            </button>

          { showCarousel &&  <div className="carousel-center-container">
                <div 
                    className={`carousel-images ${isTransitioning ? "carousel-images-transitioning" : ""}`}
                    style={{transform: `translateX(-${currentIndex * 100}%)` }}
                >
                   { slides?.map((img,index)=>{
                        return (
                            <Image
                                key={"carousel-" + img + index}
                                src={img}
                                alt={`Vue ${index} de l'appartement`}
                                width={1400}
                                height={800}
                            />
                        )
                        })
                    } 
                </div>
            </div>}
            { slides.length > 1 && 
            <>
                <ArrowButton showCarousel={showCarousel} aria={"Slide precedente"} onClick={prevSlide} style={"carousel-arrow-left"}/>
                <ArrowButton showCarousel={showCarousel} aria={"Slide suivante"} onClick={nextSlide} style={"carousel-arrow-right"}/>
            </>
            }
        </div>
    )
}