'use server'

import { cookies } from "next/headers"

export async function register(formData){
    
    const data = {
        name:formData.get("name") + " " + formData.get("surname"),
        email:formData.get("email"),
        password:formData.get("password")
    }
    
try {
     const response = await fetch("http://localhost:3000/auth/register",{
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
            secure:false,
            sameSite:"lax",
            maxAge:3600
        })

        const userCookie =  (await cookies()).set("user",JSON.stringify(registerData.user),{
            httpOnly:true,
            secure:false,
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
        return {error}
    }
    

}