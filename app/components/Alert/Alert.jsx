'use client'

import Link from "next/link"

export function Alert({color = "green",text,isLoginError = false,onClose}){

    return text && (
        <div role="button" onClick={onClose} className={`pointer alert alert-${color === "red" ? "red" : "green"}`}>
            {text}
            {isLoginError && 
                <div className="mt-40">
                    <Link className="underline" href="/login">Connectez-vous</Link>
                </div>
            }
        </div>
    )
}