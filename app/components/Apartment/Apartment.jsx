import Image from "next/image";
import Link from "next/link";
import { FavoriteBtn } from "./FavoriteBtn";


export function Apartment(
    {
        id,
        title,
        cover,
        price,
        slug,
        location
    }){

    return (
        <article 
        className="apt-card"
        itemScope
        itemType="https://schema.org/Accommodation"
        >
            <Link href={`/logement/${slug}?id=${id}`}>
                <figure>
                    <Image
                    itemProp="image"
                    src={cover}
                    loading="lazy"
                    alt={`Appartement à louer: ${title}`}
                    width={355}
                    height={376}
                    />
                </figure>
                <div className="apt-card-details-section">
                    <div>
                        <h2 itemProp="name">{title}</h2>
                        <p className="address" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <span itemProp="addressLocality">{location}</span>
                        </p>
                    </div>

                    <div itemProp="offers" className="price-container" itemScope itemType="https://schema.org/Offer">
                        <span className="price" itemProp="price" content={price}>{price}€</span>
                        <meta itemProp="priceCurrency" content="EUR" />
                        <span className="dark-grey">par nuit</span>
                        <link itemProp="availability" href="https://schema.org/InStock" />
                    </div>
                </div>
            </Link>
           <FavoriteBtn apt={{id,title,cover,price,slug,location}}/>
        </article>
    )
}