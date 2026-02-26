'use client'
import { useEffect } from "react"
import { Button } from "../components/Button/Button"
import { useRouter } from "next/navigation"

export function LoginForm({redirectPath}){
    const router = useRouter()

    useEffect(()=>{
        if (redirectPath) {
            localStorage.setItem("redirectPath",redirectPath)
        }
    },[redirectPath])


    const login = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await fetch("http://localhost:8000/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:formData
        })
        console.log(await response.json());
        
        // router.push(redirectPath)
    }
    

    return (
         <form onSubmit={login}>
            <div className="input-container">
                <label htmlFor="email">Adresse email</label>
                <input required type="email" name="email" id="email" />
            </div>
            <div className="input-container input-container-last">
                <label htmlFor="password">Mot de passe</label>
                <input required type="password" name="password" id="password" />
            </div>
            <Button styles="w-230 m-auto" type={"btn-main-red"} label={"Se connecter"}/>
        </form>
    )
}