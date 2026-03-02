import Image from "next/image";
import Link from "next/link";
import { FavoriteBtn } from "./FavoriteBtn";


/**
 * Apartment Card Component.
 * @function 
 * @name Apartment
 * @memberof module:Components
 * @description
 * Renders a property preview card with SEO microdata (Schema.org).
 * It displays essential property information and provides a link to the detailed view.
 * * * Features:
 * - **SEO Ready**: Uses `itemScope` and `itemType="https://schema.org/Accommodation"` for rich snippets.
 * - **Lazy Loading**: Images are optimized via Next.js and lazy-loaded by default.
 * - **Interactivity**: Includes a {@link FavoriteBtn} to toggle the favorite status.
 * @param {Object} props - Component props.
 * @param {string|number} props.id - Unique identifier of the apartment.
 * @param {string} props.title - The name or headline of the property.
 * @param {string} props.cover - URL path for the thumbnail image.
 * @param {number|string} props.price - Nightly rate (displayed in EUR).
 * @param {string} props.slug - URL-friendly string used for navigation.
 * @param {string} props.location - City or neighborhood name.
 * @returns {JSX.Element} A structured article representing a property listing.
 */

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