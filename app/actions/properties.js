'use server'

const API_URL = process.env.API_URL 

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