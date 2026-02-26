"use server"

import { cookies } from "next/headers";
const API_URL = process.env.API_URL 

export async function add(aptId,user){
    try {
      const token = (await cookies()).get("token").value
      const response = await fetch(`${API_URL}/api/properties/${aptId}/favorite`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization": "Bearer " + token
        },
        body:JSON.stringify(user)
      })
      const data = await response.json()
      console.log(data);
      
      return {
        ok:data.ok
      }
      

    } catch (error) {
        return {error}
    }   
}


export async function remove(aptId){
    try {
      const token = (await cookies()).get("token")?.value
      const response = await fetch(`/api/properties/${aptId}/favorite`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "authorization": "Bearer " + token
        },
      })
      const data = await response.json()
      console.log(data);
      
      return {
        ok:data.ok
      }
      

    } catch (error) {
        return {error}
    }   
}



export async function getFavorites(){
    const user = (await cookies()).get("user")?.value
    const userId = JSON.parse(user).id
    const token = (await cookies()).get("token")?.value

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