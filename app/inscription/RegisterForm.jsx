'use client'
import { redirect } from "next/navigation";
import { register } from "../actions/auth";
import { Button } from "../components/Button/Button";

export function RegisterForm(){

    const onSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = await register(formData)
        console.log(data);
        
        if (data?.status === 201) {
            localStorage.setItem("user",JSON.stringify(data.user))
            redirect(localStorage.getItem("redirectPath") ?? "/")
        }
        
    }

    return (
         <form onSubmit={onSubmit} method="POST" className="auth-form">
                <div className="input-container">
                    <label htmlFor="name">Nom</label>
                    <input required type="name" name="name" id="name" />
                </div>
                <div className="input-container">
                    <label htmlFor="surname">Prénom</label>
                    <input required type="surname" name="surname" id="surname" />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Adresse email</label>
                    <input required type="email" name="email" id="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Mot de passe</label>
                    <input required type="password" name="password" id="password" />
                </div>
                <div className="auth-page-conditions-checkbox-container">
                    <input type="checkbox" name="acceptConditions" id="acceptConditions" />
                    <label htmlFor="acceptConditions">J’accepte les <span role="button" className="underline">conditions générales d’utilisation</span></label>
                </div>
                <div className="btn-container-inscription">
                    <Button styles="w-230 m-auto" type={"btn-main-red"} label={"Se connecter"}/>
                </div>
        </form>
    )
}