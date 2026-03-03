'use client'

import Image from "next/image"
import { Carousel } from "../components/Carousel/Carousel"
import { useState } from "react"



export function AptImages({data}){
    const [showCarousel,setShowCarousel] = useState(false)
    
    return(
        <>
          <Carousel showCarousel={showCarousel} setShowCarousel={setShowCarousel} images={data.apt.pictures} />
            <div 
                inert={showCarousel ? "" : null}
                className="carousel" 
                tabIndex="0" 
                aria-label="Afficher la galerie photo"
                aria-expanded={showCarousel}
                aria-controls="carousel-container" 
                onClick={()=>setShowCarousel(true)}
                onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowCarousel(true)}}
              >
                    {data?.apt.pictures[0] && 
                        <Image
                        className="big-pic"
                        src={data?.apt.pictures[0]}
                        alt={data?.apt.title}
                        width={358}
                        height={421}
                        />
                    }

                   { data?.apt.pictures.length > 1 && 
                   <div className="little-pics-container">
                       { data?.apt.pictures.map((photo,i)=> (
                        i >= 1 && i < 5 &&
                        <Image 
                        key={photo}
                        src={photo}
                        alt={data?.apt.title}
                            width={146}
                            height={176}
                            loading="eager"
                            />
                        )) 
                       }
                    </div>
                }
            </div>
        </>

    )
}