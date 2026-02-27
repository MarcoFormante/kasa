import { getApartments } from "@/app/actions/properties";
import { Apartment } from "../Apartment/Apartment";
import { Alert } from "../Alert/Alert";

export async function AptsList(){

    const data = await getApartments();
 
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