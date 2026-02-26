'use server'

import { cookies } from "next/headers"
const API_URL = process.env.API_URL 

export async function register(formData){
    
    const data = {
        name:formData.get("name") + " " + formData.get("surname"),
        email:formData.get("email"),
        password:formData.get("password")
    }
    
try {
     const response = await fetch(`${APi_URL}/auth/register}`,{
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
            secure:false,
            sameSite:"lax",
            maxAge:3600
        })

        const userCookie =  (await cookies()).set("user",JSON.stringify(data.user),{
            httpOnly:true,
            secure:false,
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