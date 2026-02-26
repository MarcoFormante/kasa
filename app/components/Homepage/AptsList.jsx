import { getApartments } from "@/app/actions/properties";
import { Apartment } from "../Apartment/Apartment";

export async function AptsList(){

const data = await getApartments();
 
    if (!data.success) {
        return <p className="text-center">ERROR</p>
    }

    return (
        <>
        {data.apts && data.apts.length > 0 && 
            data.apts.map((apt) => (
            <Apartment 
            key={apt.id} 
            id={apt.id}
            cover={apt.cover}
            title={apt.title}
            price={apt.price_per_night}
            slug={apt.slug}
            location={apt.location}
            />
            ))
        }        
        </>
    )
}