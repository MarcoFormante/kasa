'use client'

import Image from "next/image"
import { Carousel } from "../components/Carousel/Carousel"
import { useState } from "react"



export function AptImages({data}){
    const [showCarousel,setShowCarousel] = useState(false)
    
    return(
        <>
            {showCarousel && <Carousel images={data.apt.pictures} closeCarousel={()=>setShowCarousel(false)}/>}
            <div className="carousel" onClick={()=>setShowCarousel(true)}>
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