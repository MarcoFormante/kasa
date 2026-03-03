/**
 * @module PropertyActions
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Property Data Actions</h3>
 * <p>Server-side actions used to retrieve property information from the external API. These functions facilitate data fetching for both the listing feed and individual detail pages.</p>
 * </section>
 */
'use server'
const API_URL = process.env.API_URL 


/**
 * Fetches all available apartments from the database.
 * @async
 * @function getApartments
 * @memberof module:PropertyActions
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Fetch All Properties</h3>
 * <p>Retrieves the complete collection of property listings to be displayed on the home page or discovery feed.</p>
 * <ul>
 * <li><b>Performance:</b> Executed on the server to reduce client-side data processing.</li>
 * <li><b>Error Resilience:</b> Includes a try-catch block to handle API downtime or network failures gracefully.</li>
 * </ul>
 * </section>
 * @returns {Promise<{success: boolean, apts: Array, error: Object}>} Result object containing the apartment list or error details.
 */
export async function getApartments(){
   try {
    const response = await fetch(`${API_URL}/api/properties`);
    const data = await response.json()
    
    return {
        success:true,
        apts:data
    }

   } catch (error) {
        return {
            success:false,
            error
        }
   }
}


/**
 * Fetches details for a single property by its ID.
 * @async
 * @function getSingleApartment
 * @memberof module:PropertyActions
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Fetch Single Property Detail</h3>
 * <p>Retrieves specific information for a single listing, used primarily by the dynamic detail pages.</p>
 * <ul>
 * <li><b>Parameterization:</b> Accepts a unique property ID to target specific database records.</li>
 * <li><b>Data Integrity:</b> Ensures the returned object is formatted correctly for the apartment view components.</li>
 * </ul>
 * </section>
 * @param {string} id - The unique identifier of the apartment.
 * @returns {Promise<{success: boolean, apt: Object, error: Object}>} Result object containing the property data or error details.
 */
export async function getSingleApartment(id){
    try {
        const response = await fetch(`${API_URL}/api/properties/${id}`) 
        const data = await response.json()    

        return {
            success:true,
            apt:data
        }
    } catch (error) {
        return {
            success:false,
            error
        }
    }
}