'use client'
import { useEffect } from "react"
import { Button } from "../components/Button/Button"
import { useRouter } from "next/navigation"
import { doLogin } from "../actions/auth"
import { useAlert } from "../contexts/AlertContext"

export function LoginForm({redirectPath = "/"}){
    const router = useRouter()
    const {setAlert} = useAlert()

    useEffect(()=>{
        if (redirectPath) {
            localStorage.setItem("redirectPath",redirectPath)
        }
    },[redirectPath])


    const login = async (e)=>{
        setAlert(null)
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await doLogin(formData)
        console.log(response);
        
        if (response.error === 'invalid credentials' ) {
            setAlert({color:"red",text:"Email ou mot de passe invalides"})
            return
        }
        
        if (response.token) {
            setAlert({color:"green",text:"Connection reussie"})
            router.push(redirectPath)
        }
        
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