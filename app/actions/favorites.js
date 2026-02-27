"use server"

import { cookies } from "next/headers";
const API_URL = process.env.API_URL 

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