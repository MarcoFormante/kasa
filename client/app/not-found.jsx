"use client"

import { LinkButton } from "./components/Button/LinkButton"

export default function NotFound(){
    return (
        <main className="notFound-container">
            <div>
                <h1 className="notfound-h1">404</h1>
                <p>Il semble que la page que vous cherchez ait pris des vacances… ou n’ait jamais existé.</p>
            </div>
            <div className="notFound-links-container">
                <LinkButton styles={"w-200"} label={"accueil"} href={"/"}/>
                <LinkButton styles={"w-200"} label={"Logements"} href={"/logements"}/>
            </div>
        </main>
    )
}