/**
 * @module FavoritesAction
 * @description 
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Favorites Server Actions</h3>
 * <p>A collection of secure server-side functions for managing property favorites. These actions interact directly with the backend API using the user's authentication token.</p>
 * </section>
 */
"use server"
import { cookies } from "next/headers";
import { sql } from "@vercel/postgres";
const API_URL = process.env.API_URL 

/**
 * Adds a property to the user's favorite list.
 * @async
 * @function add
 * @memberof module:FavoritesAction
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Add to Favorites</h3>
 * <p>Authenticates the user via cookies and sends a POST request to link a property to their account.</p>
 * <ul>
 * <li><b>Security:</b> Validates the presence of a JWT token before attempting the API call.</li>
 * <li><b>Error Handling:</b> Returns a specific login error if the user is unauthenticated.</li>
 * </ul>
 * </section>
 * @param {string} aptId - The unique identifier of the apartment.
 * @returns {Promise<{success: boolean, error: Object}>} Success status or error details.
 */
export async function add(aptId){
    try {
        const token = (await cookies()).get("token")?.value
        if (!token) {
            return {
                success:false,
                error:{
                    isLoginError:true,
                    message:"Vous devez vous connecter pour pouvoir ajouter dans les favorit"
                }
            }
        }
        const response = await fetch(`${API_URL}/api/properties/${aptId}/favorite`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization": "Bearer " + token
            },
        })
        const data = await response.json()
        

        if (data.ok) {
            return {success:true}
        }else{
            throw new Error("Une Erreur est survenue,ré-essayez")
        }

    } catch (error) {
        
        return {
            success:false,
            error
        }
    }   
}


/**
 * Removes a property from the user's favorite list.
 * @async
 * @function remove
 * @memberof module:FavoritesAction
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Remove from Favorites</h3>
 * <p>Sends a DELETE request to the API to unlink a specific property from the authenticated user's profile.</p>
 * <ul>
 * <li><b>Authorization:</b> Requires a valid Bearer token stored in the session cookies.</li>
 * <li><b>Persistence:</b> Updates the server-side state to ensure consistency across devices.</li>
 * </ul>
 * </section>
 * @param {string} aptId - The unique identifier of the apartment.
 * @returns {Promise<{success: boolean, error: Object}>} Success status or error details.
 */
export async function remove(aptId){
    try {
        const token = (await cookies()).get("token")?.value
        if (!token) {
            return {
                success:false,
                error:{
                    isLoginError:true,
                    message:"Vous devez vous connecter pour pouvoir ajouter dans les favorit"
                }
            }
        }

        const response = await fetch(`${API_URL}/api/properties/${aptId}/favorite`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "authorization": "Bearer " + token
            },
        })

        const data = await response.json()

        if (data.ok) {

            return {success:true}

        }else{
            throw new Error("Une Erreur est survenue,ré-essayez")
        }

    } catch (error) {
        return {
            success:false,
            error
        }
    }   
}


/**
 * Fetches the complete list of favorite properties for the current user.
 * @async
 * @function getFavorites
 * @memberof module:FavoritesAction
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Fetch Favorites</h3>
 * <p>Retrieves all property IDs marked as favorites by the user. It parses user data from cookies to target the correct API endpoint.</p>
 * <ul>
 * <li><b>Identity:</b> Extracts the userId from the user cookie object.</li>
 * <li><b>Server-to-Server:</b> Communicates directly with the API_URL backend.</li>
 * <li><b>Silent Exit:</b> Returns undefined if session credentials are missing.</li>
 * </ul>
 * </section>
 * @returns {Promise<{favorites: Array}|void>} An object containing the favorites list or void if unauthenticated.
 */
export async function getFavorites(){
    const token = (await cookies()).get("token")?.value
    const user = (await cookies()).get("user")?.value

    if (!token || !user) {
        return
    }
    const userId = JSON.parse(user).id
   
    const response = await fetch(`${API_URL}/api/users/${userId}/favorites`,{
        headers:{
            "authorization":"Bearer " + token
        }
    })
    const data = await response.json()
    return {
        favorites:data
    }
    
}