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
        <article className="apt-card">
            <Link href={`/logement/${slug}?id=${id}`}>
                <figure>
                    <Image
                    itemProp="image"
                    src={cover}
                    loading="lazy"
                    alt={"title"}
                    width={355}
                    height={376}
                    />
                </figure>
                <div className="apt-card-details-section">
                    <div>
                        <h3 itemProp="name">{title}</h3>
                        <p className="address" itemProp="address">{location}</p>
                    </div>

                    <div itemProp="offers" className="price-container" itemScope itemType="https://schema.org/Offer">
                        <span className="price" itemProp="price" content="100">{price}€</span>
                        <meta itemProp="priceCurrency" content="EUR" />
                        <span className="dark-grey">par nuit</span>
                    </div>
                </div>
            </Link>
           <FavoriteBtn apt={{id,title,cover,price,slug,location}}/>
        </article>
    )
}