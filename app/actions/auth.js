/**
 * @module AuthActions
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>Authentication Server Actions</h3>
 * <p>Provides server-side logic for user registration and login. These actions manage the secure exchange of credentials and the lifecycle of authentication cookies.</p>
 * </section>
 */

'use server'
import { cookies } from "next/headers"
const API_URL = process.env.API_URL 


/**
 * Registers a new user and sets session cookies.
 * @async
 * @function register
 * @memberof module:AuthActions
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>User Registration</h3>
 * <p>Processes the registration form data to create a new user account and automatically establishes a session upon success.</p>
 * <ul>
 * <li><b>Data Formatting:</b> Combines name and surname into a single user profile field.</li>
 * <li><b>Cookie Management:</b> Sets secure, httpOnly cookies for both the JWT token and user profile data.</li>
 * <li><b>Status Handling:</b> Monitors for a 201 status code to confirm account creation before granting access.</li>
 * </ul>
 * </section>
 * @param {FormData} formData - The form data containing name, surname, email, and password.
 * @returns {Promise<{error, status, user}>} Results containing potential errors and user information.
 */

export async function register(formData){
    
    const data = {
        name:formData.get("name").trim() + " " + formData.get("surname").trim(),
        email:formData.get("email").trim(),
        password:formData.get("password").trim()
    }

    let errors = []

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
        erreurs.push("Veuillez entrer une adresse email valide.");
    }
    
    if (!data.name) {
        errors.push("Le prénom est obligatoire");
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(data.password)) {
        errors.push("Le mot de passe doit contenir : " +
        "au moins 8 caractères, " +
        "une lettre majuscule " +
        "et au moins un chiffre.");
    }

    if (errors.length > 0) {
        return {
            success:false,
            status:400,
            error: errors.join("\n")
            
        }
    }
    
    
try {
     const response = await fetch(`${API_URL}/auth/register`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    
    const registerData = await response.json()
    
    if (response.status === 201) {
        
        const tokenCookie =  (await cookies()).set("token",registerData.token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"lax",
            maxAge:3600
        })

        const userCookie =  (await cookies()).set("user",JSON.stringify(registerData.user),{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"lax",
            maxAge:3600
        })
    }
    
    return {
        error:registerData?.error,
        status:response.status,
        user:registerData?.user
    }

    } catch (error) {
        return {
            error
        }
    }
}



/**
 * Authenticates a user and establishes session cookies.
 * @async
 * @function doLogin
 * @memberof module:AuthActions
 * @description
 * <section style="padding: 10px; border-left: 3px solid #4fb336;">
 * <h3>User Login</h3>
 * <p>Verifies user credentials against the backend API and persists the session via cookies.</p>
 * <ul>
 * <li><b>Secure Storage:</b> Stores the authentication token in an httpOnly cookie to prevent XSS access.</li>
 * <li><b>Session Persistence:</b> Configures cookie attributes like sameSite and maxAge for a balanced user experience and security.</li>
 * <li><b>Feedback Loop:</b> Returns the token and user object or captures API errors for client-side display.</li>
 * </ul>
 * </section>
 * @param {FormData} formData - The form data containing email and password.
 * @returns {Promise<{error, token, user}>} Results containing the session token or error details.
 */
export async function doLogin(formData){
    const email = formData.get("email")
    const password = formData.get("password")

  try {
     const response = await fetch(`${API_URL}/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email,password})
        })
        
       
        const data = await response.json()
            const tokenCookie =  (await cookies()).set("token",data.token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"lax",
            maxAge:3600
        })

        const userCookie =  (await cookies()).set("user",JSON.stringify(data.user),{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"lax",
            maxAge:3600
        })
        
        return {
            error:data?.error,
            token:data?.token,
            user:data.user
        }
  } catch (error) {
     return {
        error
     }
  }
}